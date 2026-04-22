{ config, lib, pkgs, ... }:

{
    imports = [
        ./networking.nix
        ./packages.nix
    ];
}