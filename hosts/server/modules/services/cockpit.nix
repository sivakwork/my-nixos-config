{ config, lib, pkgs, inputs, ... }:

{
  services.cockpit = {
    enable = true;
    openFirewall = true;
    package = pkgs.cockpit;
    port = 9001;
    allowed-origins = [
      "https://192.168.18.3:9001"
      "https://server.local:9001"
      "https://server.sivak.work"
    ];
  };
}