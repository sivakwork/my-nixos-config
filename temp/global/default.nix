{ config, lib, pkgs, ... }:

{
    imports = [
        ./networking.nix
        ./packages.nix
        ./host-configuration.nix
        ./tmpfiles.nix
    ];
}