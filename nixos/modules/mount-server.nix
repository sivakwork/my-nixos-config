{ config, lib, pkgs, ... }:

{
    fileSystems."/home/sivak/server" = {
        device = "root@server.local:/";
        fsType = "fuse.sshfs";
        options = [
            "IdentityFile=/home/sivak/.ssh/id_ed25519"
            "allow_other"
            "idmap=user"
            "reconnect"
            "x-systemd.automount"
            "user"
        ];
    };
    services.avahi = {
        enable = true;
        nssmdns4 = true;
        publish = {
            enable = true;
            addresses = true;
        };
    };
    boot.supportedFilesystems."fuse.sshfs" = true;
}