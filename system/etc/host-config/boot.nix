{ config, projectLib, hostName, lib, ... }:
let 
  mkIfHost = projectLib.mkif_host;
in {
  # Implement Grub later

  boot = {
    consoleLogLevel = mkIfHost.laptop 3;
    initrd.verbose = mkIfHost.laptop false;
    kernelParams = mkIfHost.laptop [
      "quiet"
      "udev.log_level=3"
      "systemd.show_status=auto"
      "intel_pstate=off"
    ];
    loader.efi.canTouchEfiVariables = true;
    loader.grub = lib.mkIf (hostName == "laptop" || hostName == "nixos") {
        enable = true;
        device = "nodev"; # "nodev" is used for UEFI
        efiSupport = true;
        zfsSupport = true;
    };
    loader.systemd-boot.enable = hostName == "server" || hostName == "nixvm";
  };
}