{ config, pkgs, ... }:

let
  wordpressPhpConfig = pkgs.writeText "wordpress-uploads.ini" ''
    file_uploads = On

    upload_max_filesize = 2G
    post_max_size = 2G
    memory_limit = 1G

    max_execution_time = 600
    max_input_time = 600
  '';
in
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
      "${wordpressPhpConfig}:/usr/local/etc/php/conf.d/uploads.ini:ro"
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