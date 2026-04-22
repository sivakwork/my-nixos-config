{ config, pkgs, inputs, ...}:

{
    home.packages = with pkgs; [
        # Apps
        firefox

        # CLI / Dev Tools
        nodejs
    ];
}
