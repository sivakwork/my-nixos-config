{
  description = "A very basic flake";

  nixConfig = {
    extra-substituters = [
      "https://cache.nixos-cuda.org"
      "https://nix-community.cachix.org"
    ];
    extra-trusted-public-keys = [
      "cache.nixos-cuda.org:74DUi4Ye579gUqzH4ziL9IyiJBlDpMRn9MBN8oNan9M="
      "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
    ];
  };

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    nixpkgs-24_05.url = "github:NixOS/nixpkgs/24.05";
    home-manager.url = "github:nix-community/home-manager/master";
    spicetify-nix.url = "github:Gerg-L/spicetify-nix";
    disko.url = "github:nix-community/disko";
  };

  outputs = inputs@{ self, nixpkgs, home-manager, spicetify-nix, nixpkgs-24_05 }:
  {
    nixosConfigurations.nixos = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      
      modules = [
        ./hosts/nixos/default.nix
        disko.nixosModules.disko
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
        disko.nixosModules.disko
        ./hosts/server/default.nix
      ];
    };
  };
}
