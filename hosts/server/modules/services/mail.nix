{ config, lib, pkgs, ... }:

let
  fullchain = "/srv/containers/nginx/letsencrypt/live/npm-4/fullchain.pem";
  key = "/srv/containers/nginx/letsencrypt/live/npm-4/privkey.pem";
in
{
  my.tmpfiles.rules = [
      "d /srv/containers/dovecot 0755 root root -"
  ];

  networking.firewall.allowedTCPPorts = [
    25
    143
    993
    465 
    587 
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


      inet_interfaces = "all";
      inet_protocols = "all";
    };
  };
}
