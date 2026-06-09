{
  virtualisation.oci-containers.containers.flaresolverr = {
    image = "ghcr.io/flaresolverr/flaresolverr:latest";
    extraOptions = [ "--network=container:gluetun" ];
    dependsOn = [ "gluetun" ];
    environment = { TZ = "America/Toronto"; };
  };
}