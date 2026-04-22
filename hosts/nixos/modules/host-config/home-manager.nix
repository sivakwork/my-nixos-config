{ config, lib, pkgs, ... }:

{
    home-manager.useUserPackages = true;
    home-manager.useGlobalPkgs = true;
    home-manager.backupFileExtension = "backup";
    home-manager.users.sivak = import ../../home/default.nix;

    environment.systemPackages = with pkgs; [
        kurve # Widget
    ];
}