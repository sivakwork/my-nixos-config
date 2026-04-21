{ config, lib, pkgs, ... }:

{
    imports = [
        ./hardware-configuration.nix # Include the results of the hardware scan.
        ./gaming.nix
        ./packages.nix
        ./virtualization.nix
        ./mount-server.nix
    ];
}