{ projectLib, ... }:

{
  imports = projectLib.import_helpers.importDir ./.;
  xdg.userDirs = {
      createDirectories = true;
  };
}
