{ pkgs, config, ...}:

{
  users.users.vmail = {
    isSystemUser = true;
    group = "vmail";
    home = "/srv/vmail";
    createHome = true;
  };
  users.groups.vmail = {};

  services.dovecot2 = {
    enable = true;
    package = pkgs.dovecot.override { withPgSQL = true; };

    settings = {
      dovecot_config_version = "2.4.4";
      mail_uid = "vmail";
      mail_gid = "vmail";
      mail_driver = "maildir";
      ssl_server_cert_file = config.myMail.ssl_tls.fullchain; 
      ssl_server_key_file = config.myMail.ssl_tls.key; 
      ssl = "required";
      auth_mechanisms = [ "plain" "login" ];
      protocols = {
        lmtp = true;
        pop3 = true;
        imap = true;
      };
      dovecot_storage_version = "2.4.4";
    };
    includeFiles = [
      "/srv/mail/dovecot/auth.conf"
      "/srv/mail/dovecot/db.conf"
      "/srv/mail/dovecot/lmtp.conf"
      "/srv/mail/dovecot/inbox.conf"
    ];
  };
}