{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-config/default.nix
        ./sound.nix
        ./networking.nix
        ./packages.nix
        ./tools.nix
    ];
}