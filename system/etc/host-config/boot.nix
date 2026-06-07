{ config, projectLib, hostName, lib, ... }:
let 
  mkIfHost = projectLib.mkif_host;
in {
  # Implement Grub later

  boot = {
    consoleLogLevel = mkIfHost.laptop 3;
    initrd.verbose = mkIfHost.laptop false;
    kernelParams = [
      "nowatchdog"
      "nmi_watchdog=0"
    ];
    loader.efi.canTouchEfiVariables = true;
    loader.grub =  {
        enable = hostName == ("laptop" || hostName == "vps");
        device = if (hostName == "laptop") then "nodev" else "/dev/vda"; # "nodev" is used for UEFI
        efiSupport = lib.mkIf (hostName == "laptop") true;
        zfsSupport = lib.mkIf (hostName == "laptop") true;
    };
    loader.systemd-boot = lib.mkIf (hostName == "server" || hostName == "nixos") {
      enable = true;
      configurationLimit = 5;
    };
    loader.timeout = 0;
  };
  boot.initrd.systemd.network.wait-online.enable = false;
  systemd.network.wait-online.enable = false;
}