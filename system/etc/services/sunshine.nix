{ hostName, ... }:
if (hostName == "nixos") then {
  services.sunshine = {
    enable = true;
    autoStart = true;
    capSysAdmin = true; # needed for Wayland/niri KMS capture
    openFirewall = true;
  };
} else {}
