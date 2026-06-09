{
  virtualisation.oci-containers.containers.flaresolverr = {
    image = "ghcr.io/flaresolverr/flaresolverr:latest";
    extraOptions = [ "--network=container:gluetun" ];
    environment = { TZ = "America/Toronto"; };
  };
}