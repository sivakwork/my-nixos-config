{ config, pkgs, ... }:
let 
  start = ''
      hosts=localhost
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
  
  sops.templates."postfix/sasl_passwd" = {
    owner = "postfix";
    mode = "0400";
    content = "${config.sops.placeholder."mail_sasl_passwd"}";
    restartUnits = [ "postfix.service" ];
  };

  systemd.services.postfix-sasl-postmap = {
    description = "Run postmap on sasl_passwd";
    wantedBy = [ "postfix.service" ];
    before = [ "postfix.service" ];
    after = [ "local-fs.target" ];
    serviceConfig = {
      Type = "oneshot";
      ExecStart = ''
        touch /srv/mail/postfix/sasl_passwd
        chmod 400 /srv/mail/posfix/sasl_passwd
        chown postfix:postfix /srv/mail/posfix/sasl_passwd
        ${pkgs.coreutils}/bin/cat > ${config.sops.templates."postfix/sasl_passwd".path} /srv/mail/postfix
        ${pkgs.postfix}/bin/postmap /srv/mail/postfix/sasl_passwdt
      '';
      User = "root";
    };
  };
}