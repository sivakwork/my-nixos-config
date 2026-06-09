{ config, lib, pkgs, ... }:

{
    networking.firewall = {
        enable = true;
        trustedInterfaces = [ "wg0" "podman0" ];
        allowedTCPPorts = [
            25565 # Minecraft Java
            8080 # Kodi
            8096 # Jellyfin
            8701  # qBittorrent Web UI
            7878  # Radarr
            8989  # Sonarr
            8686  # Lidarr
            6767  # Bazarr
            9696  # Prowlarr
            8191  # FlareSolverr
            5055  # Jellyseerr
        ];
        allowedUDPPorts = [
            51820 # Wireguard
            19132 # Minecraft Bedrock
            8080 # Kodi
        ];
    };
}