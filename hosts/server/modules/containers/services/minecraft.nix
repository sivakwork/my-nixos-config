
{ config, lib, pkgs, ... }:

{
    my.tmpfiles.rules = [
        "d /srv/containers/minecraft/data/the_bois_v2 0755 root root -"
        "d /srv/containers/minecraft/modpacks 0755 root root -"
    ];
    
    virtualisation.oci-containers.containers.minecraft = {
        image = "itzg/minecraft-server";
        environment = {
          EULA = "TRUE";
          TYPE = "FABRIC";
          INIT_MEMORY = "2G";
          MAX_MEMORY = "6G";
          TZ = "America/Montreal";

          OVERRIDE_SERVER_PROPERTIES = "true";
          MOTD = "The Bois server";
          ALLOW_FLIGHT = "true";
          ONLINE_MODE = "false";
          MAX_TICK_TIME = "-1";
          DIFFICULTY = "hard";
        };
        volumes = [
            "/srv/containers/minecraft/data/the_bois_v2:/data"
            # "/srv/containers/minecraft/modpacks:/modpacks"
        ];
        ports = [
            "25565:25565"
            "19132:19132"
        ];
        extraOptions = [
          "--tty"
          "--interactive"
        ];
    };

    virtualisation.oci-containers.containers.minecraft-playit = {
        image = "ghcr.io/playit-cloud/playit-agent:0.17";
        environment = {
            SECRET_KEY = "6a174f5214a082f0f7913745fababe32b8a376cb807e3dfe42dfc2d6c2537ce4";
        };
        extraOptions = [
          "--tty"
          "--interactive"
          "--net=host"
        ];
    };
}
