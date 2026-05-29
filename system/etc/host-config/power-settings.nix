{ config, lib, pkgs, projectLib, hostName ... }:
let
  condition = hostName == "server" || hostName == "nixos";
  mkIfHost = projectLib.mkif_host;
in
{
  services.power-profiles-daemon.enable = mkIfHost.laptop true;
  services.thermald.enable = mkIfHost.laptop true;

  powerManagement.cpuFreqGovernor = lib.mkIf condition "performance";
}