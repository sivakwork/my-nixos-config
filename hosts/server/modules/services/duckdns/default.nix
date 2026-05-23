{ config, lib, pkgs, ... }:

{
  services.duckdns = {
    enable = true;
    domains = [ "kavis" ];
    tokenFile = ./token;
  };
}