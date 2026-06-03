{ config, projectLib, hostName, lib, ... }:
let 
  mkIfHost = projectLib.mkif_host;
in {
  # Implement Grub later

  boot = {
    consoleLogLevel = mkIfHost.laptop 3;
    initrd.verbose = mkIfHost.laptop false;
    kernelParams = [
      "quiet"
      "nowatchdog"
      "nmi_watchdog=0"
    ];
    loader.efi.canTouchEfiVariables = true;
    loader.grub = lib.mkIf (hostName == "laptop") {
        enable = true;
        device = "nodev"; # "nodev" is used for UEFI
        efiSupport = true;
        zfsSupport = true;
    };
    loader.systemd-boot = lib.mkIf (hostName == "server" || hostName == "nixvm" || hostName == "nixos") {
      enable = true;
      configurationLimit = 5;
    };
    loader.timeout = 0;
  };
  boot.initrd.systemd.network.wait-online.enable = false;
  systemd.network.wait-online.enable = false;
}