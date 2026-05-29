{ config, lib, pkgs, ... }:

{
    networking.hostName = "laptop";
    # boot.loader.systemd-boot.enable = true;

    boot.loader.grub = {
        enable = true;
        device = "nodev"; # "nodev" is used for UEFI
        efiSupport = true;
        zfsSupport = true;
    };
    boot.loader.efi.canTouchEfiVariables = true;
}