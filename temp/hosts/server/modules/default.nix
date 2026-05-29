{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-config/default.nix
        ./networking/default.nix
        ./services/default.nix
        ./sound.nix
        ./packages.nix
        ./tools.nix
        ./nfs.nix
    ];
}