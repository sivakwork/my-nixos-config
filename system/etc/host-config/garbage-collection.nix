{ config, lib, pkgs, ... }:

{
    services.envfs.enable = true;
    nix.gc = {
        automatic = true;
        dates = "weekly";
        options = "--delete-older-than 7d";
    };
}