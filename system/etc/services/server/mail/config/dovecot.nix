{ config, ... }:

{
  environment.etc."/srv/mail/dovecot/auth.conf" = {
    text = ''
      service auth {
        unix_listener /var/spool/postfix/private/auth {
          mode = 0660
          user = postfix
          group = postfix
        }
      }
    '';
    mode = "0444";
    user = "dovecot2";
  };

  sops.templates."dovecot/db.cf" = {
    path = "/srv/mail/dovecot/db.conf ";
    owner = "dovecot2";
    mode = "0400";
    content = ''
      sql_driver = pgsql

      pgsql localhost {
        parameters {
          user = postfixadmin
          password = ${config.sops.placeholder."mail_db_passwd"}
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
  };
  
  environment.etc."/srv/mail/dovecot/inbox.conf" = {
    user = "dovecot2";
    mode = "0400";
    text = ''
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
  };

  environment.etc."/srv/mail/dovecot/lmtp.conf" = {
    user = "dovecot2";
    mode = "0400";
    text = ''
      service lmtp {
        unix_listener /var/spool/postfix/private/dovecot-lmtp {
          mode = 0600
          user = postfix
          group = postfix
        }
      }

      protocol lmtp {
        mail_plugins = sieve
      }
    '';
  };

  environment.etc."/srv/mail/dovecot/sieve.conf" = {
    user = "dovecot2";
    mode = "0400";
    text = ''
    sieve_script default {
      path = /srv/mail/dovecot/sieve/default.sieve
    }
    '';
  };
}