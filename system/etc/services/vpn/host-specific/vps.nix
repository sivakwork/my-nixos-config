{ config, lib, pkgs, ... }:

{
  networking.nat = {
    enable = true;
    externalInterface = "ens3";
    internalInterfaces = [ "wg0" ];
    enableIPv6 = false;
  };

  networking.firewall.extraCommands = ''
    iptables -t nat -A POSTROUTING -o wg0 -j MASQUERADE
  '';
  networking.firewall.extraStopCommands = ''
    iptables -t nat -D POSTROUTING -o wg0 -j MASQUERADE || true
  '';

  networking.wireguard.interfaces.wg0 = {
    ips = [ "10.100.0.2/24" ];
    listenPort = 51820;
    privateKeyFile = "/var/keys/wg0-priv-key";
    generatePrivateKeyFile = true;

    peers = [
      {
        publicKey = "gOrddYYR4/Cwkt2lQRqij7igplOzBzCLhA0n/bXriSY="; # Server
        allowedIPs = [ "10.100.0.1/32" ];
      }
      {
        publicKey = "YkKNQExPWva2GQCKZ/JJjMa5jK1YcAUrR5a+Uhxi8QM="; # Node
        allowedIPs = [ "10.100.0.3/32" ];
      }
      
      {
        publicKey = "zBX5/M1qWJKBlVxPfGL3YQJFDI1gOD9Zctd/MkKeJTg="; # Phone
        allowedIPs = [ "10.100.0.100/32" ];
      }
    ];
  };
}