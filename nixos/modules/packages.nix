{ config, lib, pkgs, ... }:

{
    environment.systemPackages = with pkgs; [
        wget
        sshfs
        git
        tigervnc
        cava
        kurve
        btop
    ];
}