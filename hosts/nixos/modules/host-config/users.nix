{ config, lib, pkgs, ... }:

{
    users.users.sivak = {
        isNormalUser = true;
        extraGroups = [ "wheel" "libvirtd" ];
        packages = with pkgs; [
            tree
        ];
    };
}