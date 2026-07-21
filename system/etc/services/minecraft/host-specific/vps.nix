{ config, lib, pkgs, ... }:

{
  virtualisation.oci-containers = {
    backend = "podman";

    containers.mc-router = {
      image = "itzg/mc-router:latest";

      ports = [
        "25565:25565/tcp"
      ];

      environment = {
        MAPPING = ''
          mc.sivak.work=10.100.0.1:25565
          mmc.sivak.work=10.100.0.3:25565
        '';
      };
    };
  };

  networking.firewall.allowedTCPPorts = [ 25565 ];
}
