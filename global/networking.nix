{ config, lib, pkgs, ... }:

{
    services.openssh.enable = true;
    
    # Expose as {hostname}.local
    services.avahi = {
        enable = true;
        nssmdns4 = true;
        nssmdns6 = true;
        publish = {
            enable = true;
            addresses = true;
        };
    };

    services.iperf3 = {
        enable = true;
        openFirewall = true;
    };

    networking.nameservers = [
        "1.1.1.1"
        "8.8.8.8"
    ];

    # Open ports in the firewall.
    # networking.firewall.allowedTCPPorts = [ ... ];
    # networking.firewall.allowedUDPPorts = [ ... ];
    # Or disable the firewall altogether.
    # networking.firewall.enable = false;
}