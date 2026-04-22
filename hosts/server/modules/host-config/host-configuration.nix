{ config, lib, pkgs, ... }:

{
    networking.hostName = "server";

    boot.loader.systemd-boot.enable = true;
    boot.loader.efi.canTouchEfiVariables = true;
}