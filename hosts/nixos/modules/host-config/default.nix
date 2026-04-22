{ config, lib, pkgs, ... }:

{
    imports = [
        ./host-configuration.nix
        ./hardware-configuration.nix
        ./desktop-env.nix
        ./home-manager.nix
        ./users.nix
    ];
}