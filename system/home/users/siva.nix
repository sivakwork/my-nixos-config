{ projectLib, ... }:
let 
  mkIfHost = projectLib.mkif_host;
in {
  users.users.siva = mkIfHost.laptop {
      isNormalUser = true;
      extraGroups = [ "wheel" ];
  };

  home-manager.users.siva = mkIfHost.laptop {
    imports = [../etc/default.nix];
    home.username = "siva";
    home.homeDirectory = "/home/siva";
  };
}