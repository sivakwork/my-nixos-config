{ pkgs, ... }:
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
        logisim-evolution
    ];
    services.flatpak.enable = true;
}
