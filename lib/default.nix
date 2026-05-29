{ lib, inputs, config, hostName, ... }:

{
  import_helpers = import ../lib/import_helpers.nix { inherit lib; };
  included_files = import ./included_files.nix;
  mk_host = import ./mk_host.nix { inherit lib; inherit inputs; inherit config; };
  mkif_host = import ./mkif_host.nix { inherit lib; inherit hostName; };
  by_host = import ./by_host.nix { inherit lib; inherit hostName; };
}