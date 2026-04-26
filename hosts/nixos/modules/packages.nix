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
        spice-gtk
        tigervnc
        sshfs
        cava
        psmisc
        pavucontrol
    ];
    services.flatpak.enable = true;
}