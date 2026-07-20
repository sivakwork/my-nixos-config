{ config, pkgs, ... }:
let 
  start = ''
      hosts=10.100.0.1
      dbname=postfixadmin
      user=postfixadmin
      password='';
in
{
  sops.templates."postfix/alias_maps.cf" = {
    path = "/srv/mail/postfix/alias_maps.cf";
    owner = "postfix";
    mode = "0400";
    content = start + ''${config.sops.placeholder."mail_db_passwd"}'' + ''

      query = SELECT goto FROM alias WHERE address='%s' AND active = true
    '';
    restartUnits = [ "postfix.service" ];
  };

  sops.templates."postfix/domain.cf" = {
    path = "/srv/mail/postfix/domain.cf";
    owner = "postfix";
    mode = "0400";
    content = start + ''${config.sops.placeholder."mail_db_passwd"}'' + ''

      query = SELECT domain FROM domain WHERE domain='%s' AND backupmx = false AND active = true
    '';
    restartUnits = [ "postfix.service" ];
  };
  
  sops.templates."postfix/mailbox_maps.cf" = {
    path = "/srv/mail/postfix/mailbox_maps.cf";
    owner = "postfix";
    mode = "0400";
    content = start + ''${config.sops.placeholder."mail_db_passwd"}'' + ''

      query = SELECT maildir FROM mailbox WHERE username='%s' AND active = true
    '';
    restartUnits = [ "postfix.service" ];
  };
}
