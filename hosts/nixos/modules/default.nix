{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-config/default.nix
        ./gaming.nix
        ./packages.nix
        ./virtualization.nix
        ./networking.nix
    ];
}