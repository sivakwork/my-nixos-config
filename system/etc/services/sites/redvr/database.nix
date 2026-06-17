{lib, config, ...}:
{
  services.mysql.ensureDatabases = [
    "wordpress_redvr"
  ];
  services.mysql.ensureUsers = [
      {
        name = "wordpress_redvr";

        ensurePermissions = {
          "wordpress_redvr.*" = "ALL PRIVILEGES";
        };
      }
  ];

  systemd.services.mysql.postStart = lib.mkAfter ''
    until ${config.services.mysql.package}/bin/mysqladmin ping \
      --user=mysql \
      --silent;
    do
      sleep 1
    done

    PASS=$(cat ${config.sops.templates."redvr_wordpress_db_pass".path})

    ${config.services.mysql.package}/bin/mysql \
      --user=mysql \
      --batch <<EOF
    ALTER USER 'wordpress_redvr'@'localhost'
      IDENTIFIED BY '$PASS';

    CREATE USER IF NOT EXISTS 'wordpress_redvr'@'10.88.%'
      IDENTIFIED BY '$PASS';

    ALTER USER 'wordpress_redvr'@'10.88.%'
      IDENTIFIED BY '$PASS';

    GRANT ALL PRIVILEGES
      ON wordpress_redvr.*
      TO 'wordpress_redvr'@'10.88.%';
  EOF
  '';
}