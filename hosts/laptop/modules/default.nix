{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-config/default.nix
        ./packages.nix
        ./networking.nix
        ./sound.nix
    ];
}