{ projectLib, pkgs, ... }:
let 
  mkIfHost = projectLib.mkif_host;
in {
  users.users.siva = mkIfHost.laptop {
      isNormalUser = true;
      extraGroups = [ "wheel" ];
      shell = pkgs.zsh;
  };
  programs.zsh.enable = true;

  home-manager.users.siva = mkIfHost.laptop {
    imports = [../etc/default.nix];
    home.username = "siva";
    home.homeDirectory = "/home/siva";
  };
}