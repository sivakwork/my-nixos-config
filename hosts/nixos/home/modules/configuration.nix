{ config, pkgs, inputs, ...}:

{
    home.username = "sivak";
    home.homeDirectory = "/home/sivak";
    home.stateVersion = "25.11";

    xdg.userDirs = {
        createDirectories = true;
    };
}