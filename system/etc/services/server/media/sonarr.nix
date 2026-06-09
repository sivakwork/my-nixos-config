{
  virtualisation.oci-containers.containers.sonarr = {
    image = "lscr.io/linuxserver/sonarr";
    extraOptions = [ "--network=container:gluetun" ];
    dependsOn = [ "gluetun" ];
    environment = {
      PUID = "0";
      PGID = "0";
      TZ = "America/Toronto";
    };
    volumes = [ "/srv/media/sonarr:/config" "/srv/media/downloads:/downloads" "/srv/media/content:/content" ];
  };
}