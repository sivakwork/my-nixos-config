{ lib, ... }:
{ 
  options.hostConfig = {
    bootloader = lib.mkOption {
      type = lib.types.str;
      default = "systemd";
    };
  };
}