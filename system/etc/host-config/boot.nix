{ config, projectLib, ... }:
let 
  mkIfHost = projectLib.mkif_host;
in {
  # Implement Grub later

  boot = {
    plymouth = lib.mkIf condition {
      enable = true;
      theme = "hexagon_dots";
      themePackages = with pkgs; [
        (adi1090x-plymouth-themes.override {
          selected_themes = [ "hexagon_dots" ];
        })
      ];
    };

    consoleLogLevel = mkIfHost.laptop 3;
    initrd.verbose = mkIfHost.laptop false;
    kernelParams = mkIfHost.laptop [
      "quiet"
      "udev.log_level=3"
      "systemd.show_status=auto"
      "intel_pstate=off"
    ];
    loader.timeout = mkIfHost.laptop 0;
    loader.efi.canTouchEfiVariables = mkIfHost.laptop true;
    
    loader.systemd-boot.enable = hostName == "server" || hostName == "nixvm";
  };
}