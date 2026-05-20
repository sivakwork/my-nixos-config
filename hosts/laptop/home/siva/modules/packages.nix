{ config, pkgs, inputs, ...}:

{
    home.packages = with pkgs; [
        # Apps
        brave
        libreoffice
    ];
}
