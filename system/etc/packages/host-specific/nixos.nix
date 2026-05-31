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
    
}