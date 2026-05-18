{ config, lib, pkgs, modulesPath, ... }:

{
  imports = [ "/etc/nixos/hardware-configuration.nix" ];

  networking.hostId = "52c538a2";
  boot.initrd = availableKernelModules = [ "ehci_pci" "ata_piix" "usbhid" "usb_storage" "sd_mod" "sr_mod" ];
  boot.supportedFilesystems = [ "zfs" ];
  boot.zfs = {
    forceImportRoot = false;
    devNodes = "/dev/disk/by-id";
    extraPools = [ "rpool" ];
  };

  hardware.cpu.intel.updateMicrocode = lib.mkDefault config.hardware.enableRedistributableFirmware;
}








