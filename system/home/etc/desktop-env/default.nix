{ projectLib, ... }:

{
  imports = (projectLib.import_helpers.importDirs ./.);
}
