{ lib, ... }:
let 
  diskoUtils = import ../../disko-utils/default.nix { inherit lib; };
  mkBase = diskoUtils.mkBase;
  mkMedia = diskoUtils.mkMedia;
in
{
  disko.devices = {
    disk = {
      root = {
        type = "disk";
        device = "/dev/nvme0n1";
        content = {
          type = "gpt";
          partitions = {
            ESP = {
              size = "1G";
              type = "EF00";
              content = {
                type = "filesystem";
                format = "vfat";
                mountpoint = "/boot";
                mountOptions = [ "nofail" "umask=0077" ];
              };
            };
            swap = {
              size = "4G";
              content = {
                type = "swap";
              };
            };
            zfs = {
              size = "100%";
              content = {
                type = "zfs";
                pool = "lpool";
              };
            };
          };
        };
      };
    };

    zpool = {
      lpool = {
        type = "zpool";
        rootFsOptions = {
          mountpoint = "none";
          compression = "lz4";
          acltype = "posixacl";
          xattr = "sa";
          atime = "off";
        };
        options.ashift = "12";

        datasets = mkBase (mkMedia {});
      };
    };
  };
}