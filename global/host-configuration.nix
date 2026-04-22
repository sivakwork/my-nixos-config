{ config, lib, pkgs, ... }:

{
    # nixpkgs.config.allowUnfree = true;
    nix.settings.experimental-features = [ "nix-command" "flakes" ];
    time.timeZone = "America/Montreal";
    i18n.defaultLocale = "en_US.UTF-8";

    console = {
        font = "Lat2-Terminus16";
        keyMap = "us";
        useXkbConfig = false; # use xkb.options in tty.
    };
}