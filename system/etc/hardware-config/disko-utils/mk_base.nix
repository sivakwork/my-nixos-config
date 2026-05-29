{ lib }:
extra:
  lib.recursiveUpdate {
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
  } extra
