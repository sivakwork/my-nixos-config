{ config, lib, pkgs, ... }:

{
    imports = [
        ./wireguard.nix
        ./configuration.nix
    ];
}