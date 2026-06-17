{ config, ... }:

{
  virtualisation.oci-containers.containers.wordpress_redvr = {
    image = "docker.io/library/wordpress:latest";

    environment = {
      WORDPRESS_DB_HOST = "host.containers.internal:3306";
      WORDPRESS_DB_NAME = "wordpress_redvr";
      WORDPRESS_DB_USER = "wordpress_redvr";
    };

    environmentFiles = [
      config.sops.templates.redvr_wordpress_db_env.path
    ];

    volumes = [
      "/srv/sites/redvr:/var/www/html"
    ];

    ports = [
      "8000:80"
    ];

    extraOptions = [
      "--add-host=host.containers.internal:host-gateway"
    ];
  };

  networking.firewall.allowedTCPPorts = [
    8000
  ];
}