{ config, ... }:

{
  virtualisation.oci-containers.containers.roundcube = {
    image = "roundcube/roundcubemail:latest";
    ports = [ "8001:80" ];
    environment = {
      ROUNDCUBEMAIL_PLUGINS = "archive,zipdownload,managesieve";
      ROUNDCUBEMAIL_MANAGESIEVE_HOST = "host.containers.internal";
      ROUNDCUBEMAIL_USERNAME_DOMAIN = "sivak.work";
      ROUNDCUBEMAIL_DEFAULT_HOST = "ssl://sivak.work";
      ROUNDCUBEMAIL_DEFAULT_PORT = "993";
      ROUNDCUBEMAIL_SMTP_SERVER = "ssl://10.100.0.2";
      ROUNDCUBEMAIL_SMTP_PORT = "465";
      ROUNDCUBEMAIL_DB_TYPE = "pgsql";
      ROUNDCUBEMAIL_DB_HOST = "host.containers.internal";
      ROUNDCUBEMAIL_DB_NAME = "roundcube";
      ROUNDCUBEMAIL_DB_USER = "roundcube";
    };
    environmentFiles = [
      config.sops.templates.mail_db_passwd_env.path
    ];  
    extraOptions = [
      "--add-host=host.containers.internal:host-gateway"
      "--add-host=sivak.work:host-gateway"
    ];
  };
}