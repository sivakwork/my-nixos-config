{ config, lib, pkgs, ... }:

let
  assigned_ips = import ../assigned-ips.nix;
in
{
    networking.nat = {
        enable = true;
        externalInterface = "wlol";
        internalInterfaces = [ "wg0" ];
        enableIPv6 = false;
    };

    networking.wireguard.interfaces.wg0 = {
        ips = [ "${assigned_ips.laptop}/24" ];
        listenPort = 51820;
        privateKeyFile = "/var/keys/wg0-priv-key";

        peers = [
          {
            publicKey = "G7aVXeBq67otVfcpJBLy18o/kzTreanDpPHKvar2iEo="; # Connet To VPS
            endpoint = "sivak.work:51820";
            allowedIPs = [ "10.100.0.0/24" ];
            persistentKeepalive = 25;
          }
        ];
    };
}