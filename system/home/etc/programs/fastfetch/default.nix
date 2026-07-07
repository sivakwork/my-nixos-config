{ pkgs, ... }:
{
  xdg.configFile."fastfetch/config.jsonc".source = ./config.jsonc;
  home.packages = with pkgs; [
    fastfetch
  ];
}