{ config, lib, pkgs, ... }:

{
    my.tmpfiles.rules = [
        "d /srv/containers/adguardhome/work 0755 root root -"
        "d /srv/containers/adguardhome/confdir  0755 root root -"
    ];
    
    virtualisation.oci-containers.containers.adguard-home = {
        image = "adguard/adguardhome";
        volumes = [
            "/srv/containers/adguardhome/work:/opt/adguardhome/work"
            "/srv/containers/adguardhome/confdir:/opt/adguardhome/conf"
        ];
        ports = [
            "53:53/tcp"
            "53:53/udp"
            
            "3000:3000/tcp"
            "444:443/tcp"
            "444:443/udp"
            "81:80/udp"
        ];
    };
}

#docker run --name adguardhome\
#    --restart unless-stopped\
#    -v /my/own/workdir:/opt/adguardhome/work\
#    -v /my/own/confdir:/opt/adguardhome/conf\
#    -p 53:53/tcp -p 53:53/udp\
#    -p 80:80/tcp -p 443:443/tcp -p 443:443/udp -p 3000:3000/tcp\
#    -p 853:853/tcp\
#    -d adguard/adguardhome
