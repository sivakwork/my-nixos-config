{
  users.users.sivak = {
      isNormalUser = true;
      extraGroups = [ "wheel" ];
  };
  specialArgs = {
    user = "sivak";
  };
  
  home-manager.users.sivak = {
    imports = [../etc/default.nix];
    home.username = "sivak";
    home.homeDirectory = "/home/sivak";
  };
}