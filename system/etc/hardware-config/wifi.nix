{ config, lib, pkgs, hostName, ... }:
{
    # Network
    networking.networkmanager.enable = lib.mkIf (hostName == "laptop") true;
    networking.nameservers = [ "1.1.1.1" "1.0.0.1" "8.8.8.8" ];
}