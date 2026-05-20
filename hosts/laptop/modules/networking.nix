{ config, lib, pkgs, ... }:

# gaming.nix manages the following firewall settings:
# remotePlay.openFirewall
# dedicatedServer.openFirewall

{
    boot.initrd.systemd.network.wait-online.enable = false;
    systemd.services.NetworkManager-wait-online.enable = false;
    
    # Network
    networking.networkmanager.enable = true;
    
    # Bluetooth
    hardware.bluetooth.enable = true;
    hardware.bluetooth.powerOnBoot = true;
    services.blueman.enable = true;
}