{ config, lib, pkgs, ... }:

{
    services.openssh.settings = {
        PermitRootLogin = "yes";
        PasswordAuthentication = true;
    };

    # Network
    networking.networkmanager.enable = true;
    
    # Bluetooth
    hardware.bluetooth.enable = true;
    hardware.bluetooth.powerOnBoot = true;
    services.blueman.enable = true;

    networking.firewall = {
        enable = true;
        trustedInterfaces = [ "wg0" ];
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