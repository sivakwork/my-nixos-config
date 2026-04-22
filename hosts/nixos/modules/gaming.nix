{ config, lib, pkgs, ... }:

{
    programs.steam = {
        enable = true;
        remotePlay.openFirewall = true;
        dedicatedServer.openFirewall = true;
    };

    programs.alvr.enable = true;
    programs.alvr.openFirewall = true;
}