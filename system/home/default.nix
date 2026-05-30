{ projectLib, ... }:
let
  import_helpers = projectLib.import_helpers;
in {
  home-manager.useUserPackages = true;
  home-manager.useGlobalPkgs = true;
  home-manager.backupFileExtension = "backup";

  imports = import_helpers.importFiles ./users;
}