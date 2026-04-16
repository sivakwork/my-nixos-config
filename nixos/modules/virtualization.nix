{ config, lib, pkgs, ... }:

let
  win10Hook = ../../scripts/vm/win10;
in
{   
    virtualisation.libvirtd.enable = true;
    virtualisation.libvirtd.qemu.package = pkgs.qemu_kvm;
    programs.virt-manager.enable = true;
    
    systemd.services.libvirtd.preStart = ''
        mkdir -p /var/lib/libvirt/hooks
        chmod 755 /var/lib/libvirt/hooks

        rm -rf /var/lib/libvirt/hooks/qemu/win10
        echo "current dir:"
        pwd
        mkdir -p /var/lib/libvirt/hooks/qemu.d/win10
        cp -r ${win10Hook}/* /var/lib/libvirt/hooks/qemu.d/win10/

        chmod -R +x /var/lib/libvirt/hooks/qemu.d
    '';
}