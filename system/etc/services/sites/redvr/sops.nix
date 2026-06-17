{ config, ... }:

let 
  file = ../../../../../secrets/etc/wordpress.yaml;
in 
{
  sops.secrets = {
    redvr_wordpress_db_pass = {
      sopsFile = file;
    };
  };

  sops.templates."redvr_wordpress_db_pass" = {
    owner = "mysql";
    mode = "0400";
    content = config.sops.placeholder.redvr_wordpress_db_pass;
    restartUnits = [ "mysql.service" ];
  };
  
  sops.templates."redvr_wordpress_db_env" = {
    mode = "0400";
    content = "WORDPRESS_DB_PASSWORD=${config.sops.placeholder.redvr_wordpress_db_pass}";
    restartUnits = [ "podman-wordpress_redvr.service" ];
  };
}