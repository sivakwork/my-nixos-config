{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-configuration.nix
        ./hardware-configuration/default.nix
        ./desktop-env.nix
        ./home-manager.nix
        ./users.nix
    ];
}