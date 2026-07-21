{ config, lib, pkgs, ... }:

{
    networking.firewall = {
        enable = true;
        trustedInterfaces = [ "podman0" ];
    };
}
