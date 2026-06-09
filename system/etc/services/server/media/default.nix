{ config, lib, projectLib, ... }:

let
    import_helpers = projectLib.import_helpers;
in
{
    systemd.tmpfiles.rules = [
        "d /srv/media/ 0755 root root -"
        "d /srv/media/jellyfin 0755 root root -"
        "d /srv/media/jellyfin/config 0755 root root -"
        "d /srv/media/jellyfin/cache 0755 root root -"
        
        "d /srv/media/content 0755 root root -"
        "d /srv/media/downloads 0755 root root -"
      
        "d /srv/media/qbittorrent 0755 root root -"
        "d /srv/media/jellyseerr 0755 root root -"
        "d /srv/media/radarr 0755 root root -"
        "d /srv/media/sonarr 0755 root root -"
        "d /srv/media/bazarr 0755 root root -"
        "d /srv/media/prowlarr 0755 root root -"
    ];
  
    imports = import_helpers.importFiles ./.;
}