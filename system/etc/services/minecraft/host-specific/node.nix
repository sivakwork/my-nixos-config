{ config, lib, ... }:

if (true) then {} else {
  systemd.tmpfiles.rules = [
    "d /srv/minecraft-aero 0750 1000 1000 -"
  ];

  virtualisation.oci-containers.containers.minecraft = {
    image = "itzg/minecraft-server:java21";
    autoStart = true;

    environment = {
      EULA = "TRUE";

      # FTB Skies 2: Aero
      TYPE = "FTBA";
      FTB_MODPACK_ID = "134";
      FTB_MODPACK_VERSION_ID = "100424";

      INIT_MEMORY = "2G";
      MAX_MEMORY = "5G";

      TZ = "America/Montreal";
    };

    volumes = [
      "/srv/minecraft-aero:/data"
    ];

    ports = [
      "25565:25565"
    ];

    extraOptions = [
      "--pull=newer"
    ];
  };
  networking.firewall.allowedTCPPorts = [ 25565 ];
}
