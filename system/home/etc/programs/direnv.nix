{ config, lib, pkgs, ... }:

{
  programs.direnv = {
    enable = true;
    enableZshIntergration = true;
  };
}
