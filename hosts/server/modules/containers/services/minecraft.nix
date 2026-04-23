
{ config, lib, pkgs, ... }:

let
  modpackName = "atm11";
in
{
    my.tmpfiles.rules = [
        "d /srv/containers/minecraft/data/${modpackName} 0755 root root -"
        "d /srv/containers/minecraft/modpacks 0755 root root -"
    ];
    
    virtualisation.oci-containers.containers.minecraft = {
        image = "itzg/minecraft-server";
        environment = {
          EULA = "TRUE";
          TYPE = "CURSEFORGE";
          CF_SERVER_MOD = "/modpacks/${modpackName}.zip";
          INIT_MEMORY = "1.5G";
          MAX_MEMORY = "6G";
          TZ = "America/Montreal";

          OVERRIDE_SERVER_PROPERTIES = "true";
          MOTD = "The bois ATM11 server";
          ALLOW_FLIGHT = "true";
          ONLINE_MODE = "false";
          MAX_TICK_TIME = "-1";
          DIFFICULTY = "hard";
        };
        volumes = [
            "/srv/containers/minecraft/data/${modpackName}:/data"
            "/srv/containers/minecraft/modpacks:/modpacks"
        ];
        ports = [
            "25565:25565"
        ];
        extraOptions = [
          "--tty"
          "--interactive"
        ];
    };
}

#docker run -d -p 25565:25565 --name mc -v mc-data:/data itzg/minecraft-server
