{ config, pkgs, inputs, ...}:

{
    home.packages = with pkgs; [
        # Apps
        firefox
        prismlauncher

        # CLI / Dev Tools
        nodejs
    ];
}
