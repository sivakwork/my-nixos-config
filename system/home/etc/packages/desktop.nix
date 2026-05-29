{ config, lib, pkgs, isDesktop ... }:

{
    environment.systemPackages = lib.mkIf isDesktop (with pkgs; [
        brave
        libreoffice
    ]);
}