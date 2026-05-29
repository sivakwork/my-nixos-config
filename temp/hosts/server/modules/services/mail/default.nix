{ config, lib, ... }:

let
    mailVars = {
        hi = "hi";
    };
in 
{
    my.tmpfiles.rules = [
      "d /srv/mail/ 0755 root root -"
      "d /srv/mail/dkim/ 0755 root root -"
      "d /srv/mail/postfix/ 0755 root root -"
    ];
  
    imports = [
        ./options.nix
        ./management.nix
        ./rspamd.nix
        ./firewall.nix
        ./roundcube.nix
        ./database.nix
        ./dovecot.nix
        ./postfix.nix
    ];
}