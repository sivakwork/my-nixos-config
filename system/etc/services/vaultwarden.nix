{ config, hostName, ... }:

if (hostName == "node") then {
  services.vaultwarden = {
    enable = true;
    backupDir = "/var/local/vaultwarden/backup";
    # in order to avoid having  ADMIN_TOKEN in the nix store it can be also set with the help of an environment file
    # be aware that this file must be created by hand (or via secrets management like sops)
    environmentFile = config.sops.templates."vaultwarden_env".path;
    config = {
        # Refer to https://github.com/dani-garcia/vaultwarden/blob/main/.env.template
        DOMAIN = "https://passwords.sivak.work";
        SIGNUPS_ALLOWED = false;

        ROCKET_ADDRESS = "0.0.0.0";
        ROCKET_PORT = 8222;
        ROCKET_LOG = "critical";

        # This example assumes a mailserver running on localhost,
        # thus without transport encryption.
        # If you use an external mail server, follow:
        #   https://github.com/dani-garcia/vaultwarden/wiki/SMTP-configuration
        SMTP_HOST = "10.0.0.1";
        SMTP_PORT = 25;
        SMTP_SECURITY = "off";

        SMTP_FROM = "passwords@sivak.work";
        SMTP_FROM_NAME = "sivak.work Vaultwarden server";
    };
  };

  networking.firewall.allowedTCPPorts = [ 8222 ];
  sops.secrets = {
    vaultwarden_token = {
      sopsFile = ../../../secrets/etc/vaultwarden.yaml;
    };
  };

  sops.templates."vaultwarden_env" = {
    mode = "0400";
    owner = "vaultwarden";
    content = ''
      ADMIN_TOKEN=${config.sops.placeholder."vaultwarden_token"}
    '';
    restartUnits = [ "vaultwarden.service" ];
  };
} else {}
