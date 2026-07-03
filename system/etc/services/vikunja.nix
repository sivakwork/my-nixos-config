{ config, ... }:
{
  networking.firewall.allowedTCPPorts = [ 3456 ];
  services.vikunja = {
    enable = true;
    frontendScheme = "https";
    frontendHostname = "vikunja.sivak.work";
    port = 3456;
    database.type = "sqlite";

    settings = {
      service = {
        enableregistration = false;
        secret = {
          file = config.sops.secrets.vikunja_secret.path;
        };
      };
    };
  };

  sops.secrets.vikunja_secret = {
    mode = "777"; # TOOO LAZYYYYYY
    sopsFile = ../../../secrets/etc/vikunja.yaml;
  };
}