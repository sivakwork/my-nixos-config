{ config, lib, hostName, pkgs, modulesPath, ... }:

lib.mkIf (hostName == "server" || hostName == "laptop" || hostName == "node") {
  boot.initrd.systemd.enable = true;
  boot.initrd.supportedFilesystems = [ "zfs" ];
  boot.initrd.availableKernelModules = [
    "usb_storage"
    "sd_mod"
    "usbhid"
    
    "xhci_pci"
    "xhci_hcd"
  ];

  networking.hostId = builtins.substring 0 8
      (builtins.hashString "md5" config.networking.hostName);
  boot.supportedFilesystems = [ "zfs" ];
  boot.zfs = {
    forceImportRoot = true;
    devNodes = "/dev/disk/by-id";
    extraPools = [ ];
  };
  services.zfs.autoScrub.enable = true;
  services.zfs.trim.enable = true;

  hardware.graphics.enable = true;

  hardware.graphics.enable32Bit = true;
}
