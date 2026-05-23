{ lib, pkgs, config, ... }:

{ 
  services.forgejo = {
    enable = true;
    database.type = "postgres";
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