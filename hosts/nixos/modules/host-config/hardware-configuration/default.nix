{ config, lib, pkgs, ... }:

{
    imports = [
        ./main.nix
        ./extend.nix
    ];
}