{
  virtualisation.oci-containers.containers.prowlarr = {
    image = "lscr.io/linuxserver/prowlarr";
    extraOptions = [ "--network=container:gluetun" ];
    environment = {
      PUID = "1000";
      PGID = "1000";
      TZ = "America/Toronto";
    };
    volumes = [ "/srv/media/prowlarr:/config" ];
  };
}