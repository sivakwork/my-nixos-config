{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-config/default.nix
        ./sound.nix
        ./networking/default.nix
        ./packages.nix
        ./tools.nix
    ];
}