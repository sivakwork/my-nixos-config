{ config, lib, pkgs, ... }:

{
    services.openssh.settings = {
        PermitRootLogin = "yes";
        PasswordAuthentication = true;
    };


    networking.firewall = {
        enable = true;
        trustedInterfaces = [ "podman0" ];
        
    };
}