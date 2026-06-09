{
  virtualisation.oci-containers.containers.qbittorrent = {
    image = "lscr.io/linuxserver/qbittorrent";
    extraOptions = [ "--network=container:gluetun" ];
    environment = {
      TZ = "America/Toronto";
      WEBUI_PORT = "8701";
    };
    volumes = [ "/srv/media/qbittorrent:/config" "/srv/media/downloads:/data" ];
  };
}