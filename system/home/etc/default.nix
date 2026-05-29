{ projectLib, ... }:

{
  imports = projectLib.import_helpers.importDir ./.;
}
