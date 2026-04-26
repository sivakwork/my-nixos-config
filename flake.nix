{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    home-manager.url = "github:nix-community/home-manager/master";
    spicetify-nix.url = "github:Gerg-L/spicetify-nix";
    minegrub-theme.url = "github:Lxtharia/minegrub-theme";
  };

  outputs = inputs@{ self, nixpkgs, home-manager, spicetify-nix, minegrub-theme }:
  {
    nixosConfigurations.nixos = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      
      modules = [
        ./hosts/nixos/default.nix
        minegrub-theme.nixosModules.default
        home-manager.nixosModules.home-manager 
        {
          home-manager.extraSpecialArgs = { inherit inputs; };
        }
      ];
    };

    nixosConfigurations.server = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      
      modules = [
        ./hosts/server/default.nix
      ];
    };
  };
}
