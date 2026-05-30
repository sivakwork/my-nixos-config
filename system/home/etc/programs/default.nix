{ projectLib, ... }:

{
  imports = (projectLib.import_helpers.importDirs ./.) ++ (projectLib.import_helpers.importFiles ./.);
  xdg.userDirs = {
      createDirectories = true;
  };
}
