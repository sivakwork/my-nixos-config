{ config, pkgs, ... }:
let 
  start = ''
      hosts=localhost
      dbname=postfixadmin
      user=postfixadmin
      password=
  '';
in
{
  sops.templates."postfix/alias_maps.cf" = {
    path = "/srv/mail/postfix/alias_maps.cf ";
    owner = "postfix";
    mode = "0400";
    content = start + "${config.sops.placeholder."mail_db_passwd"}\n" + ''
      query = SELECT goto FROM alias WHERE address='%s' AND active = true
    '';
  };

  sops.templates."postfix/domain.cf" = {
    path = "/srv/mail/postfix/domain.cf ";
    owner = "postfix";
    mode = "0400";
    content = start + "${config.sops.placeholder."mail_db_passwd"}\n" + ''
      query = SELECT domain FROM domain WHERE domain='%s' AND backupmx = false AND active = true
    '';
  };
  
  sops.templates."postfix/mailbox_maps.cf" = {
    path = "/srv/mail/postfix/mailbox_maps.cf ";
    owner = "postfix";
    mode = "0400";
    content = start + "${config.sops.placeholder."mail_db_passwd"}\n" + ''
      query = SELECT maildir FROM mailbox WHERE username='%s' AND active = true
    '';
  };
  
  sops.templates."postfix/sasl_passwd" = {
    path = "/srv/mail/postfix/sasl_passwd ";
    owner = "postfix";
    mode = "0400";
    content = "${config.sops.placeholder."mail_sasl_passwd"}";
  };

  systemd.services.postfix-sasl-postmap = {
    description = "Run postmap on sasl_passwd";
    wantedBy = [ "postfix.service" ];
    before = [ "postfix.service" ];
    after = [ "local-fs.target" ];
    serviceConfig = {
      Type = "oneshot";
      ExecStart = "${pkgs.postfix}/bin/postmap ${config.sops.templates."postfix/sasl_passwd".path}";
      User = "root";
    };
  };
}