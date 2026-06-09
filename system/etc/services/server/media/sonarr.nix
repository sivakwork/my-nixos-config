{
  virtualisation.oci-containers.containers.sonarr = {
    image = "lscr.io/linuxserver/sonarr";
    extraOptions = [ "--network=container:gluetun" ];
    environment = {
      TZ = "America/Toronto";
    };
    volumes = [ "/srv/media/sonarr:/config" "/srv/media/downloads:/data" ];
  };
}