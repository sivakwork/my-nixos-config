{ config, lib, pkgs, ... }:

{
    imports = [
        ./forgejo.nix
        ./cockpit.nix
        ./nginx.nix
        ./mail/default.nix
        ./database.nix
    ];
}