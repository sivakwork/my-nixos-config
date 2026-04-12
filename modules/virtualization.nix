{ config, lib, pkgs, ... }:

{
    virtualisation.libvirtd.enable = true;
    virtualisation.libvirtd.qemu.package = pkgs.qemu_kvm;
    programs.virt-manager.enable = true;

    systemd.services.libvirtd.preStart = ''
        mkdir -p /var/lib/libvirt/hooks
        chmod 755 /var/lib/libvirt/hooks

        rm -rf /var/lib/libvirt/hooks/qemu/win10
        cp -r ./scripts/vm/win10 /var/lib/libvirt/hooks/qemu.d/

        chmod -R +x /var/lib/libvirt/hooks/qemu.d
    '';
}