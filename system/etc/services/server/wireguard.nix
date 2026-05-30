{ config, lib, pkgs, ... }:

{
    networking.nat = {
        enable = true;
        externalInterface = "enp3s0";
        internalInterfaces = [ "wg0" ];
        enableIPv6 = false;
    };

    networking.wireguard.interfaces.wg0 = {
        ips = [ "10.100.0.1/24" ];
        listenPort = 51820;
        privateKeyFile = "/var/keys/wg0-priv-key";
        generatePrivateKeyFile = true;

        peers = [
            {
                publicKey = "zBX5/M1qWJKBlVxPfGL3YQJFDI1gOD9Zctd/MkKeJTg=";
                allowedIPs = [ "10.100.0.3/32" ];
            }
        ];
    };
}