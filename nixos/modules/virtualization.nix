{ config, lib, pkgs, ... }:

let
  win10Hook = ../../scripts/vm/win10;
in
{
    virtualisation.docker = {
        enable = true;
        rootless = {
            enable = true;
            setSocketVariable = true;
        };
    };
    
    virtualisation.libvirtd.enable = true;
    virtualisation.libvirtd.qemu.package = pkgs.qemu_kvm;
    programs.virt-manager.enable = true;

    systemd.services.libvirtd.preStart = ''
        mkdir -p /var/lib/libvirt/hooks
        chmod 755 /var/lib/libvirt/hooks

        rm -rf /var/lib/libvirt/hooks/qemu/win10
        echo "current dir:"
        pwd
        cp -r ${win10Hook} /var/lib/libvirt/hooks/qemu.d/

        chmod -R +x /var/lib/libvirt/hooks/qemu.d
    '';
}