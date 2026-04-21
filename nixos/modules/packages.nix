{ config, lib, pkgs, ... }:

{
    environment.systemPackages = with pkgs; [
        wget
        sshfs
        git
        tigervnc
        cava
        kurve
        python313Packages.kde-material-you-colors
        btop
    ];
}