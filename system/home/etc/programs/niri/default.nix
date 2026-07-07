{ hostName, lib, inputs, ... }:

if hostName == "nixos" then {
  imports = [
    ./noctalia.nix
  ];

  xdg.configFile."niri".source = ./config;
} else {}