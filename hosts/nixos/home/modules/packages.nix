{ config, pkgs, inputs, ...}:

{
    home.packages = with pkgs; [
        # Apps
        brave
        libreoffice
        prismlauncher

        # CLI / Dev Tools
        nodejs
    ];
}
