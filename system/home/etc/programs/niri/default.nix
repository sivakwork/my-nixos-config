{ hostName, lib, inputs, ... }:

if hostName == "nixos" then {
  imports = [
    ./noctalia.nix
  ];
  
  home.sessionVariables = {
    _JAVA_AWT_WM_NONREPARENTING = "1";
  };
  
  xdg.configFile."niri".source = ./config;
} else {}
