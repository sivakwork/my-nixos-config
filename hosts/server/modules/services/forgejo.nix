{ lib, pkgs, config, inputs, ... }:
let 
  pkgs_unstable = import inputs.nixpkgs-unstable {
    system = pkgs.system;
  };
in
{ 
  networking.firewall.allowedTCPPorts = [
    3000 
  ];
  services.forgejo = {
    enable = true;
    database.type = "postgres";
    package = pkgs_unstable.forgejo;
    lfs.enable = true;
    settings = {
      server = {
        DOMAIN = "git.sivak.work";
        ROOT_URL = "https://git.sivak.work/"; 
        HTTP_PORT = 3000;
      };
      service.DISABLE_REGISTRATION = true; 
      actions = {
        ENABLED = true;
        DEFAULT_ACTIONS_URL = "github";
      };
    };
  };
}