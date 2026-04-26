{ config, lib, pkgs, ... }:

{
    networking.hostName = "nixos";
    powerManagement.cpuFreqGovernor = "performance";
    # boot.loader.systemd-boot.enable = true;

    boot.loader.grub = {
        enable = true;
        device = "nodev"; # "nodev" is used for UEFI
        efiSupport = true;
        minegrub-theme = {
            enable = true;
            splash = "I use NixOS Btw";
            background = "background_options/1.8  - [Classic Minecraft].png";
            boot-options-count = 4;
        };
    };
    boot.loader.efi.canTouchEfiVariables = true;
}