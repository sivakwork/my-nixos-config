{ lib, inputs, config, ... }:

let
  mkHost = import ../../lib/mk_host.nix { inherit lib; inherit inputs; inherit config; };
in {
  flake.nixosConfigurations.server = mkHost "server" {
    specialArgs = {
      isDesktop = false;
    }; 
  };
}
