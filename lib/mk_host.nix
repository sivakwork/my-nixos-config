{ lib, inputs, config }:
let  
    included_files = import ./included_files.nix;
in hostName: extra:
    let
        projectLib = ./default.nix { inherit lib; inherit inputs; inherit config; inherit hostName; };
    in
    inputs.nixpkgs.lib.nixosSystem (lib.recursiveUpdate {
    system = "x86_64-linux";
    specialArgs = { 
        inherit inputs;
        inherit hostName;
        inherit projectLib;
    };
    modules = included_files ++ [
        home-manager.nixosModules.home-manager
        {
            home-manager.extraSpecialArgs = { inherit inputs; inherit hostName; inherit projectLib; };
            nix.settings.experimental-features = [ "nix-command" "flakes" ];
        }
    ];
} extra)