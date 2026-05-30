{ config, lib, projectLib, ... }:

let
    import_helpers = projectLib.import_helpers;
in
{
    systemd.tmpfiles.rules = [
      "d /srv/mail/ 0755 root root -"
      "d /srv/mail/dkim/ 0755 root root -"
      "d /srv/mail/postfix/ 0755 root root -"
    ];
  
    imports = import_helpers.importFiles ./. ++ import_helpers.importFiles ./config;
}