{ config, lib, pkgs, ... }:

{
    my.unfreePackages = [
        "nvidia-x11"
        "nvidia-settings"
        "vscode"
        "spotify"
        "steam"
        "steam-unwrapped"
    ];

    environment.systemPackages = with pkgs; [
        tigervnc
        sshfs
        cava
        psmisc
    ];
    services.flatpak.enable = true;
}