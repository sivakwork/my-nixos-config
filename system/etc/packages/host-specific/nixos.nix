{ config, lib, pkgs, ... }:
{
    programs.nix-ld.enable = true;
    environment.systemPackages = with pkgs; [
        # Toolchain
        flutter
        pkg-config
        bun
        nodejs
    ];
    services.flatpak.enable = true;
}