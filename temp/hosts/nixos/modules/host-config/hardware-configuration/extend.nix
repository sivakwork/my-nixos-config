{ config, lib, pkgs, modulesPath, ... }:

{
  boot.initrd.systemd.enable = true;
  boot.initrd.supportedFilesystems = [ "zfs" ];
  boot.initrd.availableKernelModules = [
    "usb_storage"
    "sd_mod"
    "usbhid"
    
    "xhci_pci"
    "xhci_hcd"
  ];

  networking.hostId = "940372ee";
  boot.supportedFilesystems = [ "zfs" "nfs" ];
  boot.zfs = {
    forceImportRoot = true;
    devNodes = "/dev/disk/by-id";
    extraPools = [ ];
  };
  services.zfs.autoScrub.enable = true;
  services.zfs.trim.enable = true;

  hardware.graphics.enable = true;
  hardware.nvidia = {
    modesetting.enable = true;
    nvidiaSettings = true;
    open = false;
  };
  hardware.graphics.enable32Bit = true;

  fileSystems."/mnt/nfs" = {
    device = "server.local:/";
    fsType = "nfs";
    options = [
      "nfsvers=4"
      "_netdev"
      "noauto"
      "x-systemd.automount"
      "x-systemd.idle-timeout=60"
    ];
  };
  fileSystems."/home/sivak/remote" = {
    device = "server.local:/home/sivak";
    fsType = "nfs";
    options = [
      "nfsvers=4"
      "_netdev"
      "noauto"
      "x-systemd.automount"
      "x-systemd.idle-timeout=60"
    ];
  };

  boot = {
    plymouth = {
      enable = true;
      theme = "breeze";
      themePackages = with pkgs; [
        kdePackages.breeze-plymouth
      ];
    };

    consoleLogLevel = 3;
    initrd.verbose = false;
    kernelParams = [
      "quiet"
      "udev.log_level=3"
      "systemd.show_status=auto"
      "intel_pstate=off"
    ];
    # Hide the OS choice for bootloaders.
    # It's still possible to open the bootloader list by pressing any key
    # It will just not appear on screen unless a key is pressed
    loader.timeout = 0;
  };
}
