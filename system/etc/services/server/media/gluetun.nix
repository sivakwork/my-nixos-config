{ config, ... }:
{
  virtualisation.oci-containers.containers.gluetun = {
    image = "qmcgaw/gluetun";
    ports = [
      "8701:8701"      # qBittorrent Web UI
      "6881:6881"      # Torrent
      "6881:6881/udp"  # Torrent
      "7878:7878"      # Radarr
      "8989:8989"      # Sonarr
      "8686:8686"      # Lidarr
      "6767:6767"      # Bazarr
      "9696:9696"      # Prowlarr
      "8191:8191"      # FlareSolverr
    ];
    environment = {
      VPN_TYPE = "openvpn";
      VPN_SERVICE_PROVIDER = "private internet access";
      VPN_PORT_FORWARDING = "on";
      PORT_FORWARD_ONLY = "true";
      SERVER_REGIONS="Netherlands";
      TZ = "America/Toronto";
    };

    environmentFiles = [
      config.sops.templates.gluetun_env.path
    ];  
    volumes = [ "./gluetun:/gluetun" ];
    
    extraOptions = [
      "--cap-add=NET_ADMIN"
      "--device=/dev/net/tun"
    ];
  };
}