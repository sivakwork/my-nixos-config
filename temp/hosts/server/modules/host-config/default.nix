{ config, lib, pkgs, ... }:

{
    imports = [
        ./disko.nix
        ./host-configuration.nix
        ./hardware-configuration/default.nix
        ./users.nix
        ./desktop-env.nix
    ];
}