{ projectLib, hostName, ... }:

if ( hostName == "vps" || hostName == "server" || hostName == "node" ) then {
  imports = projectLib.import_helpers.importFiles ./.;
} else {}