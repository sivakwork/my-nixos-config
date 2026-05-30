{ config, lib, pkgs, hostName, ... }:
{
    # Network
    networking.networkmanager.enable = lib.mkIf (hostName == "laptop") true;
}