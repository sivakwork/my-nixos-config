{ config, lib, pkgs, ... }:

{
    my.tmpfiles.rules = [
        "d /srv/containers/nginx/nginx 0755 root root -"
        "d /srv/containers/nginx/nginx-ui 0755 root root -"
        "d /var/www 0755 root root -"
    ];
    
    virtualisation.oci-containers.containers.nginx = {
        image = "uozi/nginx-ui:latest";
        environment.TZ = "America/Montreal";
        volumes = [
            "/srv/containers/nginx/nginx:/etc/nginx"
            "/srv/containers/nginx/nginx-ui:/etc/nginx-ui"
            "/var/www:/var/www"
            "/run/podman/podman.sock:/var/run/docker.sock"
        ];
        ports = [
            "8080:80"
            "8443:443"
        ];
        extraOptions = [
            "--name=nginx-ui"
        ];
    };
}

# docker run -dit \
#   --name=nginx-ui \
#   --restart=always \
#   -e TZ=Asia/Shanghai \
#   -v /mnt/user/appdata/nginx:/etc/nginx \
#   -v /mnt/user/appdata/nginx-ui:/etc/nginx-ui \
#   -v /var/www:/var/www \
#   -v /var/run/docker.sock:/var/run/docker.sock \
#   -p 8080:80 -p 8443:443 \
#   uozi/nginx-ui:latest