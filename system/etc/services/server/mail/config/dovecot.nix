{ config, ... }:

{
  sops.templates."dovecot/auth.conf" = {
    content = ''
      service auth {
        inet_listener auth {
          port = 23
        }
      }
    '';
    mode = "0444";
    owner = "dovecot2";
    restartUnits = [ "dovecot.service" ];
  };

  sops.templates."dovecot/db.conf" = {
    path = "/srv/mail/dovecot/db.conf";
    owner = "dovecot2";
    mode = "0400";
    content = ''
      sql_driver = pgsql

      pgsql localhost {
        parameters {
          user = postfixadmin
          password = "${config.sops.placeholder."mail_db_passwd"}"
          dbname = postfixadmin
        }
      }

      passdb sql {
        query = SELECT username, password, \
          '/srv/mail/vmail/' || split_part(username, '@', 2) || '/' || split_part(username, '@', 1) || '/Maildir' AS userdb_home, \
          '/srv/mail/vmail/' || split_part(username, '@', 2) || '/' || split_part(username, '@', 1) || '/Maildir' AS userdb_mail_path \
          FROM mailbox \
          WHERE username = '%{user}' AND active = '1'
      }

      userdb prefetch {
      }  

      userdb sql {
        query = SELECT \
          '/srv/mail/vmail/' || split_part(username, '@', 2) || '/' || split_part(username, '@', 1) || '/Maildir' AS mail_path, \
          '/srv/mail/vmail/' || split_part(username, '@', 2) || '/' || split_part(username, '@', 1) || '/Maildir' AS home \
          FROM mailbox \
          WHERE username = '%{user}' AND active = '1'
      }
    '';
    restartUnits = [ "dovecot.service" ];
  };
  
  sops.templates."dovecot/inbox.conf" = {
    owner = "dovecot2";
    mode = "0400";
    content = ''
      namespace inbox {
        inbox = yes
        mailbox Drafts {
          special_use = \Drafts
          auto = subscribe
        }
        mailbox Junk {
          special_use = \Junk
          auto = subscribe
        }
        mailbox Sent {
          special_use = \Sent
          auto = subscribe
        }
        mailbox Trash {
          special_use = \Trash
          auto = subscribe
        }
        mailbox Archive {
          special_use = \Archive
          auto = subscribe
        }
        mailbox Newsletters {
          auto = subscribe
        }
        mailbox Notifications {
          auto = subscribe
        }
      }
    '';
    restartUnits = [ "dovecot.service" ];
  };

  sops.templates."dovecot/lmtp.conf" = {
    owner = "dovecot2";
    mode = "0400";
    content = ''
      service lmtp {
        inet_listener lmtp {
          port = 24
        }
      }

      protocol lmtp {
        mail_plugins = sieve
      }
    '';
    restartUnits = [ "dovecot.service" ];
  };

  sops.templates."dovecot/sieve.conf" = {
    owner = "dovecot2";
    mode = "0400";
    content = ''
    sieve_script default {
      path = /srv/mail/dovecot/sieve/default.sieve
    }
    '';
    restartUnits = [ "dovecot.service" ];
  };
}