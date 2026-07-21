{config, lib, pkgs, ... }:

{
    systemd.tmpfiles.rules = [
        "d /srv/containers 0755 root root -"
        "d /srv/containers/nginx 0755 root root -"
        "d /srv/containers/nginx/data 0755 root root -"
        "d /srv/containers/nginx/letsencrypt 0755 root root -"
    ];
    
    virtualisation.oci-containers.containers.nginx = {
        image = "jc21/nginx-proxy-manager:latest";
        environment.TZ = "America/Toronto";
        volumes = [
            "/srv/containers/nginx/data:/data"
            "/srv/containers/nginx/letsencrypt:/etc/letsencrypt"
        ];
        ports = [
            "80:80"
            "81:81"
            "443:443"
            "19132:19132/udp"
        ];
        extraOptions = [
            "--name=nginx-ui"
        ];
    };

    networking.firewall.allowedUDPPorts = [ 19132 ];
}

# services:
#   app:
#     image: 'jc21/nginx-proxy-manager:latest'
#     restart: unless-stopped
#     environment:
#       TZ: "Australia/Brisbane"
#     ports:
#       - '80:80'
#       - '81:81'
#       - '443:443'
#     volumes:
#       - ./data:/data
#       - ./letsencrypt:/etc/letsencrypt
