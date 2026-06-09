{
  virtualisation.oci-containers.containers.radarr = {
    image = "lscr.io/linuxserver/radarr";
    extraOptions = [ "--network=container:gluetun" ];
    dependsOn = [ "gluetun" ];
    environment = {
      PUID = "0";
      PGID = "0";
      TZ = "America/Toronto";
    };
    volumes = [ "/srv/media/radarr:/config" "/srv/media/downloads:/downloads" "/srv/media/content:/content" ];
  };
}