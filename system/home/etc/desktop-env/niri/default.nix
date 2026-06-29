{ hostName, lib, inputs, ... }:

if hostName == "nixos" then {
  imports = [
    inputs.noctalia.homeModules.default
  ];

  xdg.configFile."niri".source = ./config;   

  programs.kitty = {
    enable = true;
    extraConfig = ''
      hide_window_decorations yes
      include ~/.config/kitty/themes/noctalia.conf
      window_padding_width 10
    '';
  };

  programs.noctalia-shell = {
    enable = true;
    settings = {
      bar = {
        density = "default";
        position = "right";
        barType = "framed";
        showCapsule = false;
        widgets = {
          left = [
            {
              id = "ControlCenter";
              useDistroLogo = true;
            }
            {
              id = "Bluetooth";
            }
          ];
          center = [
            {
              hideUnoccupied = false;
              id = "Workspace";
              labelMode = "none";
            }
          ];
          right = [
            {
              formatHorizontal = "HH:mm";
              formatVertical = "HH mm";
              id = "Clock";
              useMonospacedFont = true;
              usePrimaryColor = true;
            }
          ];
        };
      };
      colorSchemes.predefinedScheme = "Github Dark";
      location = {
        monthBeforeDay = true;
        name = "Montreal, Canada";
      };
    };
  };
} else {}