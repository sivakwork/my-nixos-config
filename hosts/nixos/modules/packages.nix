{ config, lib, pkgs, ... }:

{

    environment.systemPackages = with pkgs; [
        spice-gtk
        tigervnc
        sshfs
        cava
        psmisc
        melt
        winetricks
        protontricks
        pavucontrol
        unityhub
        protonup-qt
        lutris
    ];
    services.flatpak.enable = true;
    
    my.unfreePackages = [
        # Nvidia

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