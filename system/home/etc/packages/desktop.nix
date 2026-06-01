{ config, lib, pkgs, isDesktop, ... }:

{
    home.packages = lib.mkIf isDesktop (with pkgs; [
        prismlauncher
        brave
        libreoffice
    ]);
}