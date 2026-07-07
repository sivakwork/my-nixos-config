{ pkgs, ... }:
{
  users.users.sivak = {
      isNormalUser = true;
      extraGroups = [ "wheel" ];
      shell = pkgs.zsh;
  };
  programs.zsh.enable = true;
  
  home-manager.users.sivak = {
    imports = [../etc/default.nix];
    home.username = "sivak";
    home.homeDirectory = "/home/sivak";
  };
}