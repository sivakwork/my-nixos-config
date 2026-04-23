{ config, lib, pkgs, ... }:

{
    imports = [
        ./configuration.nix
        ./services/default.nix
    ];
}