{ pkgs, ... }: {
  services.xserver = {
      enable = true;
      desktopManager.kodi = {
          enable = true;
          package = (pkgs.kodi.withPackages (kodiPkgs: with kodiPkgs; [
              inputstream-adaptive
          ]));
      };
      displayManager.lightdm.greeter.enable = true;
  };
}