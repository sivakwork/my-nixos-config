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
                mountOptions = [ "nofail" "fmask=0022" "dmask=0022"  ];
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
                pool = "zroot";
              };
            };
          };
        };
      };
    };

    zpool = {
      zroot = {
        type = "zpool";
        rootFsOptions = {
          mountpoint = "none";
          compression = "lz4";
          acltype = "posixacl";
          xattr = "sa";
          atime = "off";
        };
        options.ashift = "12";

        datasets = {
          "root" = {
            type = "zfs_fs";

            mountpoint = "/";
          };
          "root/etc" = {
            type = "zfs_fs";
            options.compression = "zstd-3";
            mountpoint = "/etc";
          };
          "var" = {
            type = "zfs_fs";
            options.compression = "zstd-3";
            mountpoint = "/var";
          };
          "srv" = {
            type = "zfs_fs";
            options.compression = "zstd";
            mountpoint = "/srv";
          };
          "nix" = {
            type = "zfs_fs";
            options.compression = "zstd";
            mountpoint = "/nix";
          };
          "home" = {
            type = "zfs_fs";
            mountpoint = "/home";
          };
        };
      };
    };
  };
}