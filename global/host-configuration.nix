{ config, lib, pkgs, ... }:

{
    # nixpkgs.config.allowUnfree = true;
    nix.gc = {
        automatic = true;
        dates = "weekly";
        options = "--delete-older-than 7d";
    };
    nix.settings.experimental-features = [ "nix-command" "flakes" ];
    time.timeZone = "America/Montreal";
    i18n.defaultLocale = "en_US.UTF-8";

    console = {
        font = "Lat2-Terminus16";
        keyMap = "us";
        useXkbConfig = false; # use xkb.options in tty.
    };
}