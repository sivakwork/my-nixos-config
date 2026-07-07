{ hostName, ... }:
if hostName == "nixos" then {
  xdg.configFile."wezterm/wezterm.lua".force = true;
  programs.wezterm = {
    enable = true;
    settings = {
      window_content_alignment = {
        horizontal = "Left";
        vertical = "Bottom";
      };
      color_scheme = "Noctalia";
      window_background_opacity = 0.96;
      window_decorations = "NONE";
      enable_tab_bar = false;
      tab_bar_at_bottom = false;
      window_padding =  {
        left = 9;
        right = 9;
        top = 9;
        bottom = 9;
      };
    };

    extraConfig = ''
      local wezterm = require("wezterm")

      wezterm.on("user-var-changed", function(window, pane, name, value)
        if name ~= "NVIM_PADDING" then
          return
        end

        local overrides = window:get_config_overrides() or {}

        if value == "0" then
          overrides.window_padding = {
            left = 0,
            right = 0,
            top = 0,
            bottom = 0,
          }
          overrides.window_background_opacity = 1
          overrides.colors = overrides.colors or {}
          overrides.colors.background = "#0d1117"
        else
          overrides.window_padding = nil
          overrides.window_background_opacity = 0.96
          if overrides.colors then
            overrides.colors.background = nil
          end
        end

        window:set_config_overrides(overrides)
      end)
    '';
  };
} else {}