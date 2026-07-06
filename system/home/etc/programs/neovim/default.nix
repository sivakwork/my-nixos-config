{ hostName, lib, inputs, ... }:

if hostName == "nixos" then {
  xdg.configFile."nvim".source = ./nvim; 
  programs.neovim = {
    enable = true;
    extraConfig = ''
      set number relativenumber
    '';
  };
} else {}