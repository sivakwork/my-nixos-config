{ config, lib, pkgs, ... }:

let
  assigned_ips = import ../assigned-ips.nix;
in
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
    ips = [ "${assigned_ips.vps}/24" ];
    listenPort = 51820;
    privateKeyFile = "/var/keys/wg0-priv-key";
    generatePrivateKeyFile = true;

    peers = [
      {
        publicKey = "gOrddYYR4/Cwkt2lQRqij7igplOzBzCLhA0n/bXriSY="; # Server
        allowedIPs = [ "${assigned_ips.server}/32" ];
      }
      {
        publicKey = "YkKNQExPWva2GQCKZ/JJjMa5jK1YcAUrR5a+Uhxi8QM="; # Node
        allowedIPs = [ "${assigned_ips.node}/32" ];
      }
      {
        publicKey = "jgofJfLgLGhA9MCUEPpb+OwsDznx3Y/m1WBhVSk8VVI="; # laptop
        allowedIPs = [ "${assigned_ips.laptop}/32" ];
      }
      {
        publicKey = "1FsFAPMWF1UoaDAFLIvnkXU6vJtXpsJN1g48KH+SYz8="; # nixos
        allowedIPs = [ "${assigned_ips.nixos}/32" ];
      }

      {
        publicKey = "zBX5/M1qWJKBlVxPfGL3YQJFDI1gOD9Zctd/MkKeJTg="; # Phone
        allowedIPs = [ "${assigned_ips.phone}/32" ];
      }
    ];
  };
}