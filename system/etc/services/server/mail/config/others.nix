{ config, ... }:

{
  sops.templates."mail_db_passwd_env" = {
    mode = "0400";
    content = ''
      ROUNDCUBEMAIL_DB_PASSWORD=${config.sops.placeholder."mail_db_passwd"}
      POSTFIXADMIN_DB_PASSWORD=${config.sops.placeholder."mail_db_passwd"}
    '';
    restartUnits = [ "podman-roundcube.service" "podman-postfixadmin.service" ];
  };
  sops.templates."mail_db_passwd_postgres" = {
    owner = "postgres";
    mode = "0400";
    content = "${config.sops.placeholder."mail_db_passwd"}";
    restartUnits = [ "postgresql.service" ];
  };
}