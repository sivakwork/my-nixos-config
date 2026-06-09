{
  virtualisation.oci-containers.containers.radarr = {
    image = "lscr.io/linuxserver/radarr";
    extraOptions = [ "--network=container:gluetun" ];
    environment = {
      TZ = "America/Toronto";
    };
    volumes = [ "/srv/media/radarr:/config" "/srv/media/downloads:/data" ];
  };
}