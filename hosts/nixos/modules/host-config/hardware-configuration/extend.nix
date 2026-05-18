{ config, lib, pkgs, modulesPath, ... }:

{
  boot.initrd.availableKernelModules = [
    "usb_storage"
    "sd_mod"
    "usbhid"
    
    "xhci_pci"
    "xhci_hcd"
  ];

  networking.hostId = "940372ee";
  boot.supportedFilesystems = [ "zfs" ];
  boot.zfs = {
    forceImportRoot = false;
    devNodes = "/dev/disk/by-id";
    extraPools = [ ];
  };

  hardware.graphics.enable = true;
  hardware.nvidia = {
    modesetting.enable = true;
    nvidiaSettings = true;
    open = false;
  };
  hardware.graphics.enable32Bit = true;
}
