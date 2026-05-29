{ config, pkgs, inputs, ...}:

{
    home.username = "siva";
    home.homeDirectory = "/home/siva";
    home.stateVersion = "25.11";

    xdg.userDirs = {
        createDirectories = true;
    };
}