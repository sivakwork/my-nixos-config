{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-config/default.nix
        ./networking/default.nix
        ./containers/default.nix
        ./sound.nix
        ./packages.nix
        ./tools.nix
    ];
}