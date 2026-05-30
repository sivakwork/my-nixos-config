{ projectLib, ... }:

{
  imports = projectLib.import_helpers.importDirs ./.;
  home.stateVersion = "26.05";
}
