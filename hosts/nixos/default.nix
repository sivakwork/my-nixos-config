{ config, lib, pkgs, ... }:

{
    imports = [
        ./../../global/default.nix
        ./modules/default.nix
    ];

    # NEVER CHANGE
    system.stateVersion = "25.11";
}