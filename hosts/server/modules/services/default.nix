{ config, lib, pkgs, ... }:

{
    imports = [
        ./forgejo.nix
        ./cockpit.nix
        ./nginx.nix
        ./mail.nix
    ];
}