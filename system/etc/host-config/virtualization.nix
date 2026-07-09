{ hostName, pkgs, ... }:
if ( hostName == "nixos" ) then {   
    boot.kernelParams = [
        "intel_iommu=on"
        "iommu=pt"
    ];
    boot.initrd.kernelModules = [ "vfio_pci" "vfio" "vfio_iommu_type1" ];
    virtualisation.libvirtd.enable = true;
    virtualisation.libvirtd.qemu.package = pkgs.qemu_kvm;
    programs.virt-manager.enable = true;
} else if ( hostName == "node" || hostName == "server" || hostName == "vps" ) then {
    virtualisation = {
        containers.enable = true;
        podman = {
            enable = true;
            dockerCompat = true;
            defaultNetwork.settings.dns_enabled = true;
        };
    };
} else {}
