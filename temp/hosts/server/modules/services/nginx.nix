{config, lib, pkgs, ... }:

{
    my.tmpfiles.rules = [
        "d /srv/containers/nginx/data 0755 root root -"
        "d /srv/containers/nginx/letsencrypt 0755 root root -"
    ];
    
    virtualisation.oci-containers.containers.nginx = {
        image = "jc21/nginx-proxy-manager:latest";
        environment.TZ = "America/Montreal";
        volumes = [
            "/srv/containers/nginx/data:/data"
            "/srv/containers/nginx/letsencrypt:/etc/letsencrypt"
        ];
        ports = [
            "80:80"
            "81:81"
            "443:443"
        ];
        extraOptions = [
            "--name=nginx-ui"
        ];
    };
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