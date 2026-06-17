{
  disko.devices = {
    disk = {
      sda = {
        type = "disk";
        device = "/dev/sda";
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
            zfs = {
              size = "100%";
              content = {
                type = "zfs";
                pool = "nroot";
              };
            };
          };
        };
      };

      sdb = {
        type = "disk";
        device = "/dev/sdb";
        content = {
          type = "gpt";
          partitions = {
            zfs = {
              size = "100%";
              content = {
                type = "zfs";
                pool = "nroot";
              };
            };
          };
        };
      };
    };

    zpool = {
      nroot = {
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