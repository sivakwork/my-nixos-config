{ config, lib, pkgs, ... }:

{
  services.nfs.server = {
    enable = true;
    lockdPort = 4001;
    mountdPort = 4002;
    statdPort = 4000;
    exports = ''
      / 192.168.18.0/24(rw,sync,no_subtree_check,crossmnt,no_root_squash)
      /home/sivak 192.168.18.0/24(rw,sync,no_subtree_check,crossmnt,no_root_squash)
    '';
    extraNfsdConfig = '''';
  };
  networking.firewall.allowedTCPPorts = [ 111  2049 4000 4001 4002 20048 ];
  networking.firewall.allowedUDPPorts = [ 111  2049 4000 4001 4002 20048 ];
}