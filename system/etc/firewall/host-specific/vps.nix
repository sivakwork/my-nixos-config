{ config, lib, pkgs, ... }:

{
    networking.firewall = {
        enable = true;
        trustedInterfaces = [ "wg0" "podman0" ];
        allowedTCPPorts = [
            25565 # Minecraft Java
            80 # HTTP
            443 # HTTPS
            81 # nginx
        ];
        allowedUDPPorts = [
            51820 # Wireguard
            19132 # Minecraft Bedrock
        ];
    };
}