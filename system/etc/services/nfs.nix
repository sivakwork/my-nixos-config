{ hostName, ... }:
if (hostName == "server") then {
    services.nfs.server = {
    enable = true;
    exports = ''
      /media 10.100.0.0/24(rw,sync,no_subtree_check) 192.168.18.0/24(rw,sync,no_subtree_check)
    '';
  };
  networking.firewall.allowedTCPPorts = [ 2049 ];
} else if (hostName == "nixos") then {
  fileSystems."/mnt/server-media" = {
    device = "server.local:/media";
    fsType = "nfs";
    options = [
      "nfsvers=4"
      "noauto"
    ];
  };
} else {}
