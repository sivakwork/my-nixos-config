{
  virtualisation.oci-containers.containers.bazarr = {
    image = "lscr.io/linuxserver/bazarr";
    extraOptions = [ "--network=container:gluetun" ];
    environment = {
      PUID = "1000";
      PGID = "1000";
      TZ = "America/Toronto";
    };
    volumes = [ "/srv/media/bazarr:/config" "/srv/media/downloads:/data" ];
  };
}