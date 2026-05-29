{ config, lib, pkgs, modulesPath, ... }:

{
  networking.hostId = "52c538a2";
  boot.initrd.supportedFilesystems = [ "zfs" ];
  boot.initrd.systemd.enable = true;
  boot.initrd.availableKernelModules = [ "ehci_pci" "ata_piix" "usbhid" "usb_storage" "sd_mod" "sr_mod" ];
  boot.supportedFilesystems = [ "zfs" "nfs" ];
  boot.zfs = {
    forceImportRoot = true;
    devNodes = "/dev/disk/by-id";
  };

  services.zfs.autoScrub.enable = true;
  hardware.cpu.intel.updateMicrocode = lib.mkDefault config.hardware.enableRedistributableFirmware;
}








