{ config, lib, pkgs, ... }:

{
    imports = [
        ./duckdns/default.nix
        ./forgeo.nix
        ./cockpit.nix
        ./nginx.nix
    ];
}