{
  virtualisation.oci-containers.containers.transmission = {
    image = "lscr.io/linuxserver/transmission";

    extraOptions = [
      "--network=container:gluetun"
    ];
    dependsOn = [ "gluetun" ];

    environment = {
      TZ = "America/Toronto";
      PUID = "0";
      PGID = "0";
      TRANSMISSION_WEB_HOME = "/config/flood-for-transmission";
    };

    volumes = [
      "/srv/media/transmission:/config"
      "/srv/media/downloads:/downloads"
      "/srv/media/watch:/watch"
    ];
  };
}