{ lib, inputs, config, ... }:

let
  mkHost = import ../../lib/mk_host.nix { inherit lib; inherit inputs; inherit config; };
in {
  flake.nixosConfigurations.nixvm = mkHost "vps" {
    specialArgs = {
      isDesktop = false;
    }; 
  };
}