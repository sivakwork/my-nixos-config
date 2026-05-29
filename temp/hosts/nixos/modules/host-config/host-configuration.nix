{ config, lib, pkgs, ... }:

{
    networking.hostName = "nixos";
    powerManagement.cpuFreqGovernor = "performance";
    # boot.loader.systemd-boot.enable = true;

    boot.loader.grub = {
        enable = true;
        device = "nodev"; # "nodev" is used for UEFI
        efiSupport = true;
        zfsSupport = true;
    };
    boot.loader.efi.canTouchEfiVariables = true;
}