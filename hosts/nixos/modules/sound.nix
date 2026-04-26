{ config, lib, pkgs, ... }:

{
    services.pipewire = {
        systemWide= true;
        enable = true;
        pulse.enable = true;
        wireplumber.enable = true;
        alsa.enable = true;
    };
}