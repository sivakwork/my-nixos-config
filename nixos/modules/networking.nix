{ config, lib, pkgs, ... }:

# gaming.nix manages the following firewall settings:
# remotePlay.openFirewall
# dedicatedServer.openFirewall

{
    # Mount my server
    fileSystems."/home/sivak/server" = {
        device = "root@server.local:/";
        fsType = "fuse.sshfs";
        options = [
            "IdentityFile=/home/sivak/.ssh/id_ed25519"
            "allow_other"
            "idmap=user"
            "_netdev"
            "reconnect"
            "StrictHostKeyChecking=accept-new"
            "user"
            "nofail"
            "x-systemd.automount"
            "x-systemd.mount-timeout=5"
            "x-systemd.device-timeout=5"
        ];
    };
    boot.supportedFilesystems."fuse.sshfs" = true;

    # Expose as {hostname}.local
    services.avahi = {
        enable = true;
        nssmdns4 = true;
        nssmdns6 = true;
        publish = {
            enable = true;
            addresses = true;
        };
    };

    services.iperf3 = {
        enable = true;
        openFirewall = true;
    };

}