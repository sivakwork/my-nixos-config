{ config, lib, pkgs, hostName, ... }:

if (hostName == "nixos" || hostName == "laptop") then {
    hardware.bluetooth.enable = true;
    hardware.bluetooth.powerOnBoot = true;
    services.blueman.enable = true;
} else {}