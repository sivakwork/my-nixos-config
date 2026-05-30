{ projectLib, ... }:

{
  imports = projectLib.import_helpers.importFiles ./. ++ projectLib.by_host.dirs ./host-specific;
}