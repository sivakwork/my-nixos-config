{ config, hostName, ... }:
if (hostName == "nixos") then {
  networking.firewall.allowedUDPPorts = [ 9993 ];
  services.zerotierone = {
    enable = true;
    joinNetworks = [ "743993800f6aaeb5" ];
    port = 9993;
  };
} else {}