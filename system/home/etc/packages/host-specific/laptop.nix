{ config, lib, pkgs, ... }:

{
    home.packages = lib.mkIf (config.home.username == "sivak") (with pkgs; [
        libreoffice
    ]);
}