{ config, lib, pkgs, ... }:

{
    imports = [
      ./nginx.nix
      ./adguard-home.nix
      # ./minecraft.nix
    ];
}