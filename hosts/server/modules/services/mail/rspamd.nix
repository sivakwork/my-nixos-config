{ options, config, ... }:
{
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
        enabled = true;
        selector = "default";
        domain = ${config.myMail.domain};
        canonicalization = "relaxed/relaxed";
        sign_headers = "From:To:Subject:Message-ID";
        path = "/srv/mail/dkim/sivak.work.key";
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
          actions {
            add_header = 6;
            rewrite_subject = 8;
            reject = 15;
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
