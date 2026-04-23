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
      allowedUDPPorts = [ 51820 ];
    };
}