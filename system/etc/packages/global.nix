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

    nixpkgs.config.allowUnfreePredicate = pkg: builtins.elem (lib.getName pkg)  [
        # Nvidia
        "nvidia-kernel-modules"
        "nvidia-x11"
        "nvidia-settings"

        # Steam
        "steam"
        "steam-unwrapped"
        
        # Others
        "vscode"
        "spotify"
    ];
    nixpkgs.config.allowUnfree = true;
}