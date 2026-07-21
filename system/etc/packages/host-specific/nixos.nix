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
        gnumake
        clang
        logisim-evolution
        bitwarden-desktop

        kdePackages.qtsvg
        kdePackages.kio # needed since 25.11
        kdePackages.kio-fuse #to mount remote filesystems via FUSE
        kdePackages.kio-extras #extra protocols support (sftp, fish and more)
        kdePackages.dolphin
  ];

    services.flatpak.enable = true;

    nixpkgs.config.permittedInsecurePackages = [
      "electron-39.8.10"
    ];
}
