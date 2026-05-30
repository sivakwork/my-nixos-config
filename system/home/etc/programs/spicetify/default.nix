{ inputs, ... }:
{
  imports = [
    inputs.spicetify-nix.homeManagerModules.default
    ./app.nix
  ];
}