{ config, lib, pkgs, ... }:

{
    services.desktopManager.plasma6.enable = true;
    services.xserver = {
        enable = true;
        videoDrivers = [ "nvidia" ];
    };
    
}