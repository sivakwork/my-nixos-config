{ config, lib, pkgs, ... }:

{

    environment.systemPackages = with pkgs; [
        # Design
        freecad

        # Audio / Video
        cava

        # Gaming / Compatability
        winetricks
        protontricks
        protonup-qt
        unityhub
    ];
    
    nixpkgs.config.allowUnfreePredicate = pkg: builtins.elem (lib.getName pkg)  [
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

        # Others
        "vscode"
        "spotify"
    ];
}