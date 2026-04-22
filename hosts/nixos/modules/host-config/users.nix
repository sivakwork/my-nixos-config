{ config, lib, pkgs, ... }:

{
    users.users.sivak = {
        isNormalUser = true;
        extraGroups = [ "wheel" "libvirtd" "docker" ];
        packages = with pkgs; [
            tree
        ];
    };
}