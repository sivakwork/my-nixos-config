{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-config/default.nix
        ./laptop-optimizations.nix
        ./packages.nix
        ./networking.nix
        ./sound.nix
    ];
}