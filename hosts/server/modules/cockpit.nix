{ config, lib, pkgs, ... }:

{
  services.cockpit = {
    enable = true;
    openFirewall = true;
    plugins = [
      pkgs.cockpit-zfs
    ];
    port = 9001;
    allowed-origins = [
      "https://192.168.18.3:9001"
      "https://server.local:9001"
    ];
  };
}