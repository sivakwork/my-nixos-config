{ projectLib, hostName, ... }:

if hostName == "node" then {
  systemd.tmpfiles.rules = [
    "d /srv/sites 0755 root root -"
    "d /srv/sites/redvr 0755 root root -"
  ];
  imports = projectLib.import_helpers.importFiles ./.;
} else {}