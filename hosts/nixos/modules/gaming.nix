{ config, lib, pkgs, inputs, ... }:

let
  pkgs_24_05 = import inputs.nixpkgs-24_05 {
    system = pkgs.system;
  };
in
{
    programs.steam = {
        enable = true;
        remotePlay.openFirewall = true;
        dedicatedServer.openFirewall = true;
    };

    programs.alvr = {
        enable = true;
        openFirewall = true;
        package = pkgs_24_05.alvr;
    };
}