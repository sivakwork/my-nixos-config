{ lib, inputs, config }:
let  
    included_files = import ./included_files.nix;
in hostName: extra:
    let
        projectLib = import ./default.nix { inherit lib; inherit inputs; inherit config; inherit hostName; };
    in
    inputs.nixpkgs.lib.nixosSystem (lib.recursiveUpdate {
    system = "x86_64-linux";
    specialArgs = { 
        inherit inputs;
        inherit hostName;
        inherit projectLib;
    };
    modules = included_files ++ [
       inputs.sops-nix.nixosModules.sops
       inputs.disko.nixosModules.disko
       inputs.vscode-server.nixosModules.default
       inputs.home-manager.nixosModules.home-manager
        {
            home-manager.extraSpecialArgs = lib.recursiveUpdate { inherit inputs; inherit hostName; inherit projectLib; } (extra.specialArgs or {});
            nix.settings.experimental-features = [ "nix-command" "flakes" ];
        }
    ];
} extra)