{ config, lib, pkgs, isDesktop, ... }:

{
    environment.systemPackages = lib.mkIf isDesktop (with pkgs; [
        # Utils
        libirecovery
        libimobiledevice
        idevicerestore
        qdiskinfo

        # Networking
        tigervnc

        # Audio / Video
        pavucontrol
        kodi

        # Development
        nodejs
    ]);
}