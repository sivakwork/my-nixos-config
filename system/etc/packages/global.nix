{ config, lib, pkgs, ... }:

{
    environment.systemPackages = with pkgs; [
        # Utils        
        git # Version Control
        btop # System Monitor
        fastfetch # Quick System Info
        sops # Secrets
        inetutils # Networking
        busybox # Commons
        age # Age Cryptographys
        psmisc # Processes sum

        # Networking
        sshfs

        # Storage
        zfs
    ];
}