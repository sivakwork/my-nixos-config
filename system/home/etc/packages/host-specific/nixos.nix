{ config, lib, pkgs ... }:

{
    environment.systemPackages = lib.mkIf config.username == "sivak" (with pkgs; [
        prismlauncher
    ]);
}