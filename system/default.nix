{ lib, config, ... }:
let
  import_helpers = import ../lib/import_helpers.nix { inherit lib; };
in {
  imports = import_helpers.importFiles ./hosts;
}