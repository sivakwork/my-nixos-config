{ config, lib, pkgs, ... }:

{
    users.users.sivak = {
        isNormalUser = true;
        extraGroups = [ "wheel" ];
        packages = with pkgs; [
            tree
        ];
    };
}