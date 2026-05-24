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
    # Offical Nixos Package Sources
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
    nixpkgs-unstable.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    nixpkgs-24_05.url = "github:NixOS/nixpkgs/24.05";
    nixos-25_11-small.url = "github:NixOS/nixpkgs/nixos-25.11-small";
    
    simple-nixos-mailserver.url = "gitlab:simple-nixos-mailserver/nixos-mailserver/nixos-25.11";
    simple-nixos-mailserver.inputs.nixpkgs.follows = "nixos-25_11-small";
    
    # Declartive partitioning and formatting
    disko = {
      url = "github:nix-community/disko";
      inputs.nixpkgs.follows = "nixpkgs";
    };
   
    # Secrets mangement
    sops-nix = {
      url = "github:Mic92/sops-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    # Others
    home-manager.url = "github:nix-community/home-manager/release-25.11";
    spicetify-nix.url = "github:Gerg-L/spicetify-nix";
  };

  outputs = inputs@{ self, nixpkgs, home-manager, spicetify-nix, nixpkgs-24_05, disko, sops-nix, simple-nixos-mailserver, nixos-25_11-small, nixpkgs-unstable}:
  {
    nixosConfigurations.nixos = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      
      modules = [
        ./hosts/nixos/default.nix
        ./sops.nix
        disko.nixosModules.disko
        home-manager.nixosModules.home-manager 
        {
          home-manager.extraSpecialArgs = { inherit inputs; };
        }
      ];
    };

    nixosConfigurations.laptop = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      
      modules = [
        ./hosts/laptop/default.nix
        disko.nixosModules.disko
        home-manager.nixosModules.home-manager
        ./sops.nix
        {
          home-manager.extraSpecialArgs = { inherit inputs; };
        }
      ];
    };

    nixosConfigurations.server = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      
      modules = [
        simple-nixos-mailserver.nixosModule
        disko.nixosModules.disko
        ./hosts/server/default.nix
        ./sops.nix
      ];
    };
  };
}
