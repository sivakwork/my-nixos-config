{ hostName, lib, inputs, ... }:

if hostName == "nixos" then {
  xdg.configFile."nvim/init.lua".source = ./nvim/init.lua;
  xdg.configFile."nvim/lua".source = ./nvim/lua;
  programs.neovim = {
    enable = true;
    extraConfig = ''
      set number relativenumber
    '';
  };
} else {}