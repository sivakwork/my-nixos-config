{ config, lib, pkgs, ... }:

let
  assigned_ips = import ../assigned-ips.nix;
in
{
    networking.nat = {
        enable = true;
        externalInterface = "enp3s0";
        internalInterfaces = [ "wg0" ];
        enableIPv6 = false;
    };

    networking.wireguard.interfaces.wg0 = {
        ips = [ "${assigned_ips.server}/24" ];
        listenPort = 51820;
        privateKeyFile = "/var/keys/wg0-priv-key";

        peers = [
            {
                publicKey = "G7aVXeBq67otVfcpJBLy18o/kzTreanDpPHKvar2iEo="; # Connet To VPS
                endpoint = "sivak.work:51820";
                allowedIPs = [ "${assigned_ips.vps}/32" ];
                persistentKeepalive = 25;
            }
            
            {
                publicKey = "zBX5/M1qWJKBlVxPfGL3YQJFDI1gOD9Zctd/MkKeJTg="; # Phone
                allowedIPs = [ "${assigned_ips.phone}/32" ];
            }
        ];
    };
}