{ config, lib, pkgs, ... }:

{
    networking.firewall = {
        enable = true;
        trustedInterfaces = [ "wg0" "podman0" ];
        allowedTCPPorts = [
            25565 # Minecraft Java
            8080 # Kodi
        ];
        allowedUDPPorts = [
            51820 # Wireguard
            19132 # Minecraft Bedrock
            8080 # Kodi
        ];
    };
}