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
    sops-nix.url = "github:Mic92/sops-nix";
    sops-nix.inputs.nixpkgs.follows = "nixpkgs";
    home-manager.url = "github:nix-community/home-manager/master";
    spicetify-nix.url = "github:Gerg-L/spicetify-nix";
    minegrub-theme.url = "github:Lxtharia/minegrub-theme";
  };

  outputs = inputs@{ self, nixpkgs, home-manager, spicetify-nix, nixpkgs-24_05, minegrub-theme, sops-nix }:
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
        sops-nix.nixosModules.sops
      ];
    };

    nixosConfigurations.server = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      
      modules = [
        ./hosts/server/default.nix
        sops-nix.nixosModules.sops
      ];
    };
  };
}
