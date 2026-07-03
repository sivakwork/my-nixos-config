{ config, lib, pkgs, ... }:
{
    programs.nix-ld.enable = true;
    environment.systemPackages = with pkgs; [
        # Toolchain
        flutter
        pkg-config
        bun
        kdePackages.okular
        cmake
        clang
        (rWrapper.override {
            packages = with pkgs.rPackages; [
                ggplot2
            ];
        })
    ];
    services.flatpak.enable = true;
}