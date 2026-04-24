{ config, lib, pkgs, ... }:

# gaming.nix manages the following firewall settings:
# remotePlay.openFirewall
# dedicatedServer.openFirewall

{
    my.tmpfiles.rules = [
        "d /mnt/server 0755 sivak sivak -"
    ];

    # Mount my server
    fileSystems."/mnt/server" = {
        device = "root@server.local:/";
        fsType = "fuse.sshfs";
        options = [
            "IdentityFile=/home/sivak/.ssh/id_ed25519"
            "idmap=user"
            "_netdev"
            "reconnect"
            "StrictHostKeyChecking=accept-new"
            "user"
            "x-systemd.automount"
            "x-systemd.mount-timeout=5"
            "x-systemd.device-timeout=5"
        ];
    };
    boot.supportedFilesystems."fuse.sshfs" = true;
    
    # This service slows down boot wait... i dont even use wifi... i could just static ip, ill change it late tooo lzyy
    boot.initrd.systemd.network.wait-online.enable = false;
    systemd.services.NetworkManager-wait-online.enable = false;
    
    # Network
    networking.networkmanager.enable = true;
    
    # Bluetooth
    hardware.bluetooth.enable = true;
    hardware.bluetooth.powerOnBoot = true;
    services.blueman.enable = true;
}