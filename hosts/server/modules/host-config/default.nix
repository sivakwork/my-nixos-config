{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-configuration.nix
        ./hardware-configuration.nix
        ./users.nix
    ];
}