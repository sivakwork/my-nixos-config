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

        # Gaming / Compatability
        winetricks
        protontricks
        protonup-qt
        unityhub
    ];
    services.flatpak.enable = true;
    
    my.unfreePackages = [
        # Nvidia
        "nvidia-kernel-modules"
        "nvidia-x11"
        "nvidia-settings"

        # Steam
        "steam"
        "steam-unwrapped"
        
        # Unity
        "unityhub"
        "corefonts"

        # Blender Part (non-free because of cuda)
        "blender-wrapped"
        "blender"
        "cuda_cudart" 
        "cuda_nvcc"
        "cuda_cccl"

        # Others
        "vscode"
        "spotify"
    ];
}