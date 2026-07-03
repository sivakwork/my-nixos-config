{ config, lib, ... }:

{
  systemd.tmpfiles.rules = [
    "d /srv/minecraft 0750 1000 1000 -"
  ];

  virtualisation.oci-containers.containers.minecraft = {
    image = "itzg/minecraft-server:latest";
    autoStart = true;

    environment = {
      EULA = "TRUE";
      TYPE = "FABRIC";
      VERSION = "26.1.2";
      ENABLE_RCON = "true";
      RCON_PASSWORD = "rcon";
      INIT_MEMORY = "2G";
      MAX_MEMORY = "6G";
      TZ = "UTC";
    };

    volumes = [
      "/srv/minecraft:/data"
    ];

    ports = [
      "25565:25565"
      "19132:19132/udp"
    ];

    extraOptions = [
      "--pull=newer"
    ];
  };
}
