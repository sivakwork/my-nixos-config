{ config, ... }:

{
  virtualisation.oci-containers.containers.jellyfin = {
    image = "jellyfin/jellyfin";
    ports = [ 
      "8096:8096"
    ];

    volumes = [
      "/srv/media/jellyfin/config:/config"
      "/srv/media/jellyfin/cache:/cache"
      "/srv/media/content:/media"
      "/dev/dri:/dev/dri"
    ];

    environment = {
      TZ = "America/Toronto";
    };
  };
}