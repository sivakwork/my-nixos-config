{
  systemd.tmpfiles.rules = [
    "d /srv/deceased-craft 0750 1000 1000 -"
  ];

  virtualisation.oci-containers.containers.minecraft = {
    # DeceasedCraft requires Java 17
    image = "docker.io/itzg/minecraft-server:stable-java17";
    autoStart = true;

    environment = {
      EULA = "TRUE";

      TYPE = "FORGE";
      VERSION = "1.20.1";
      FORGE_VERSION = "47.4.0";

      GENERIC_PACK = "/modpacks/DeceasedCraft.zip";
      SKIP_GENERIC_PACK_UPDATE_CHECK = "TRUE";

      INIT_MEMORY = "4G";
      MAX_MEMORY = "8G";

      ONLINE_MODE = "FALSE";

      ENABLE_COMMAND_BLOCK = "TRUE";
      ALLOW_FLIGHT = "TRUE";

      VIEW_DISTANCE = "8";
      SIMULATION_DISTANCE = "6";

      TZ = "America/Montreal";
      MOTD = "DeceasedCraft Beta 5.10.17";
    };

    volumes = [
      "/srv/deceased-craft:/data"
      "/srv/modpacks:/modpacks:ro"
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