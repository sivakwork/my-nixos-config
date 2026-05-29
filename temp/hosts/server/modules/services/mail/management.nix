{ config, ...}:

{
  virtualisation.oci-containers.containers.postfixadmin = {
    image = "postfixadmin:latest";
    environment = {
      POSTFIXADMIN_DB_TYPE = "pgsql";
      POSTFIXADMIN_DB_HOST = "host.containers.internal";
      POSTFIXADMIN_DB_NAME = "postfixadmin";
      POSTFIXADMIN_DB_USER = "postfixadmin";
      POSTFIXADMIN_SMTP_SERVER = "host.containers.internal";
      POSTFIXADMIN_SMTP_PORT = "25";
    };
    environmentFiles = [
      config.sops.secrets.postfix_db_env.path
    ];
    ports = [
      "8000:80"
    ];
    extraOptions = [ 
      "--add-host=host.containers.internal:host-gateway"
    ];
  };
}

# services:
#   db:
#     image: mysql:8.0
#     restart: always
#     environment:
#       MYSQL_RANDOM_ROOT_PASSWORD: 1
#       MYSQL_DATABASE: postfixadmin
#       MYSQL_USER: postfixadmin
#       MYSQL_PASSWORD: example

#   postfixadmin:
#     depends_on:
#       - db
#     image: postfixadmin
#     ports:
#       - 8000:80
#     restart: always
#     environment:
#       POSTFIXADMIN_DB_TYPE: mysqli
#       POSTFIXADMIN_DB_HOST: db
#       POSTFIXADMIN_DB_USER: postfixadmin
#       POSTFIXADMIN_DB_NAME: postfixadmin
#       POSTFIXADMIN_DB_PASSWORD: example
