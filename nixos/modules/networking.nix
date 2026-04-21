{ config, lib, pkgs, ... }:

{
    services.iperf3 = {
        enable = true;
        openFirewall = true;
    };
}