{ config, lib, pkgs, ... }:

{

    environment.systemPackages = with pkgs; [
        # Toolchain
        flutter
        pkg-config
        bun
    ];
    services.flatpak.enable = true;
}