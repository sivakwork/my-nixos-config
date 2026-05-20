{ config, lib, pkgs, ... }:

{
    home-manager.useUserPackages = true;
    home-manager.useGlobalPkgs = true;
    home-manager.backupFileExtension = "backup";
    home-manager.users.sivak = import ../../home/sivak/default.nix;
    home-manager.users.siva = import ../../home/siva/default.nix;
}