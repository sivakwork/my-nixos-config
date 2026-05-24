{ config, lib, pkgs, ... }:

let
  fullchain = "/srv/containers/nginx/letsencrypt/live/npm-4/fullchain.pem";
  key = "/srv/containers/nginx/letsencrypt/live/npm-4/privkey.pem";
in
{
  my.tmpfiles.rules = [
      "d /srv/containers/dovecot 0755 root root -"
      "d /srv/containers/rspmd/ 0755 root root -"
      "d /srv/containers/rspmd/dkim/ 0755 root root -"
  ];

  networking.firewall.allowedTCPPorts = [
    25
    143
    993
    465 
    587 
    11334
  ];

  users.users.vmail = {
    isSystemUser = true;
    group = "vmail";
    home = "/var/vmail";
    createHome = true;
  };
  users.groups.vmail = {};

  systemd.services.dovecot.preStart = ''
    mkdir -p /var/spool/postfix/private
    chown dovecot2:postfix /var/spool/postfix/private
    chmod 750 -R /var/spool/postfix/private
    chown postfix:postfix /var/spool/postfix/private/auth
    chmod 666 /var/spool/postfix/private/auth
  '';

  services.dovecot2 = {
    enable = true;
    enableImap = true;
    enableLmtp = true;
    enablePop3 = false;
    enablePAM = false;
    
    sslServerCert = fullchain; 
    sslServerKey = key; 

    mailLocation = "maildir:/var/vmail/%d/%n/Maildir";
    mailUser = "vmail";
    mailGroup = "vmail";

    protocols = [ "imap" "lmtp" ];

    extraConfig = ''
      ssl = required
      !include /srv/containers/dovecot/auth.conf
    '';
  };

  services.postfix = {
    enable = true;
    enableSubmission = true;
    enableSubmissions = true;

    # domain of the email address that this postfix is hosting
    settings.master.smtpd.chroot = false;
    settings.main = {
      mydomain = "sivak.work";
      myhostname = "mail.sivak.work";
      myorigin = "$mydomain";
      mydestination = "$myhostname, localhost.$mydomain, localhost";
      virtual_mailbox_domains = "sivak.work";
      virtual_transport = "lmtp:unix:/var/spool/postfix/private/dovecot-lmtp";

      # --- INBOUND ---
      smtpd_tls_security_level = "may";
      smtpd_tls_cert_file = fullchain;
      smtpd_tls_key_file  = key;

      # SASL Authentication
      smtpd_sasl_type = "dovecot";
      smtpd_sasl_path = "/var/spool/postfix/private/auth";
      smtpd_sasl_auth_enable = "yes";

      # --- OUTBOUT ---
      relayhost = [ "[smtp.gmail.com]:587" ];
      smtp_sasl_password_maps = "hash:/srv/containers/postfix/sasl_passwd";
      smtp_tls_security_level = "encrypt";
      smtp_sasl_auth_enable = "yes";
      smtp_tls_CAfile = "/etc/ssl/certs/ca-certificates.crt";
      smtp_sasl_security_options = "noanonymous";

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

  services.rspamd = {
    enable = true;
    postfix.enable = true;
    locals = {
      "redis.conf".text = ''
        servers = "${config.services.redis.servers.rspamd.unixSocket}";
      '';

      "classifier-bayes.conf".text = ''
        backend = "redis";
        autolearn = true;
      '';

      "dkim_signing.conf".text = ''
        enabled = false;
        selector = "default";
        domain = "sivak.work";
        canonicalization = "relaxed/relaxed";
        sign_headers = "From:To:Subject:Message-ID";
        path = "/srv/containers/rspmd/dkim/sivak.work.key";
      '';

      "worker-controller.inc".text = ''
        bind_socket = "0.0.0.0:11334";
        password = "REDACTED";
      '';

      "rbl.conf".text = ''
        enabled = true;
        group = "dnsbl";
        default_score = 3.0;

        rbls {
          spamhaus_zen {
            rbl = "zen.spamhaus.org";
            symbol = "RBL_SPAMHAUS_ZEN";
          }
          barracuda {
            rbl = "b.barracudacentral.org";
            symbol = "RBL_BARRACUDA";
          }
          sorbs {
            rbl = "dnsbl.sorbs.net";
            symbol = "RBL_SORBS";
          }
          abuseipdb {
            rbl = "dnsbl.abuseipdb.com";
            symbol = "RBL_ABUSEIPDB";
          }
        }
      '';
    };
  };

  services.redis.servers.rspamd = {
    enable = true;
    # 0 disables listening to TCP ports and will only use unix sockets. Default
    # unix socket path is /run/redis-${name}/redis.sock thus
    # /run/redis-rspamd/redis.sock here.
    port = 0;
    user = config.services.rspamd.user;
    unixSocketPerm = 770;
  };
}
