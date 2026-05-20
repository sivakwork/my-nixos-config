{ config, lib, pkgs, ... }:

{

    environment.systemPackages = with pkgs; [
        # Design
        freecad
        
        # Utils
        psmisc
        qdiskinfo

        # Networking
        sshfs
        tigervnc

        # Audio / Video
        cava
        pavucontrol

        # Storage
        zfs
    ];
    services.flatpak.enable = true;
    
    my.unfreePackages = [
        "spotify"
    ];
}