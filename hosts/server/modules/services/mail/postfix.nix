{ config, pkgs, ...}:
{
   services.postfix = {
    enable = true;
    package = pkgs.postfix.override { withPgSQL = true; };
    enableSubmission = true;
    enableSubmissions = true;

    # domain of the email address that this postfix is hosting
    settings.master.smtpd.chroot = false;
    settings.main = {
      mydomain = config.myMail.domain;
      myhostname = config.myMail.host;
      myorigin = "$mydomain";
      mydestination = "$localhost.$mydomain, localhost";
      
      # Virtual Mailbox
      virtual_mailbox_domains = "pgsql:/srv/mail/postfix/domain.cf"; # check if responsible for domain (i only have one)
      # |
      # V
      virtual_alias_maps = "pgsql:/srv/mail/postfix/alias_maps.cf"; # check if it's an alias
      # |
      # V
      virtual_mailbox_maps = "pgsql:/srv/mail/postfix/mailbox_maps.cf"; # find user mailbox
      # |withPgSQL
      # V
      virtual_mailbox_base = "/srv/mail/vmail"; # base where to check if mailbox exists
      # |
      # V
      virtual_transport = "lmtp:unix:/var/spool/postfix/private/dovecot-lmtp"; # deliver it off to dovecot
      
      # Apprently irelevant using dovecot but why not 
      virtual_uid_maps = "static:989";
      virtual_gid_maps = "static:986";

      # --- INBOUND ---
      smtpd_tls_security_level = "may";
      smtpd_tls_cert_file = config.myMail.ssl_tls.fullchain;
      smtpd_tls_key_file  = config.myMail.ssl_tls.key;

      # SASL Authentication
      smtpd_sasl_type = "dovecot";
      smtpd_sasl_path = "/var/spool/postfix/private/auth";
      smtpd_sasl_auth_enable = "yes";

      # --- OUTBOUND ---
      relayhost = [ "[smtp-relay.brevo.com]:587" ];
      smtp_sasl_password_maps = "hash:/srv/mail/postfix/sasl_passwd";
      smtp_sasl_auth_enable = "yes";
      smtp_tls_security_level = "encrypt";
      smtp_sasl_security_options = "noanonymous";
      header_size_limit = "4096000";
      smtp_tls_CAfile = "/etc/ssl/certs/ca-certificates.crt";

      non_smtpd_milters = [
        "unix:/run/rspamd/rspamd-milter.sock"
      ];
      smtpd_milters = [
        "unix:/run/rspamd/rspamd-milter.sock"
      ]; 
      milter_protocol = "6";
      milter_mail_macros = "i {mail_addr} {client_addr} {client_name} {auth_authen}";

      inet_interfaces = "all";
      inet_protocols = "all";
    };
  };
}