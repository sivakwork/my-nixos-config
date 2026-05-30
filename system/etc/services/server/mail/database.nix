{ options, config, lib, ...}:

{
  services.postgresql = {
    ensureDatabases = [ "postfixadmin" "roundcube" ];
    ensureUsers = [
      {
        name = "postfixadmin";
        ensureDBOwnership = true;
        ensureClauses = { login = true; };
      }
      {
        name = "roundcube";
        ensureDBOwnership = true;
        ensureClauses = { login = true; };
      }
      {
        name = "root";
        ensureClauses = { superuser = true; };
      }
    ];
  };

  systemd.services.postgresql.postStart = lib.mkAfter ''
    until [ -S /run/postgresql/.s.PGSQL.5432 ]; do sleep 1; done

    PASS=$(cat ${config.sops.templates."mail_db_passwd_postgres".path})
    ${config.services.postgresql.package}/bin/psql -t <<EOF
      ALTER ROLE postfixadmin WITH PASSWORD '$PASS';
      ALTER ROLE roundcube WITH PASSWORD '$PASS';
    EOF
  '';
}