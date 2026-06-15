{ projectLib, hostName, ... }:

if ( hostName == "vps" || hostName == "server" || hostName == "redvr" ) then {
  imports = projectLib.import_helpers.importFiles ./.;
} else {}