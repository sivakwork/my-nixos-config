{ config, lib, pkgs, ... }:

{
    services.displayManager.autoLogin.user = "sivak";
    services.xserver = {
        enable = true;
        desktopManager.kodi = {
            enable = true;
            package = (pkgs.kodi.withPackages (kodiPkgs: with kodiPkgs; [
                inputstream-adaptive
            ]));
        };
        displayManager.lightdm.greeter.enable = false;
    };
}