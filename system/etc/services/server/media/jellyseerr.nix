{
  virtualisation.oci-containers.containers.jellyseerr = {
    image = "fallenbagel/jellyseerr:latest";
    ports = [ "5055:5055" ];
    environment = {
      TZ = "America/Toronto";
      LOG_LEVEL = "info";
    };
    volumes = [ "/srv/media/jellyseerr:/app/config" ];
  };
}