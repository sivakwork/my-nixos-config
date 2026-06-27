{ hostName, pkgs, ... }:

if (hostName == "nixos" || hostName == "laptop") then {
  services.usbmuxd.enable = true;

  environment.systemPackages = with pkgs; [
    libimobiledevice
    ifuse # optional, to mount using 'ifuse'
  ];
} else {}