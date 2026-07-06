{ hostName, lib, inputs, ... }:

if hostName == "nixos" then {
  imports = [
    ./noctalia.nix
  ];

  xdg.configFile."niri".source = ./config;   

  programs.kitty = {
    enable = true;
    extraConfig = ''
      hide_window_decorations yes
      selection_foreground none
      selection_background none
      include ~/.config/kitty/themes/noctalia.conf
      window_padding_width 10
    '';
  };
} else {}