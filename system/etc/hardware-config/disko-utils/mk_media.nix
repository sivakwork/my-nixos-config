{ lib }:
extra:
  lib.recursiveUpdate {
  "media" = {
      type = "zfs_fs";
      mountpoint = "/media";
    };
    "media/photos" = {
      type = "zfs_fs";
      options.compression = "zstd-3";
      options.recordsize = "1M";
      mountpoint = "/media/photos";
    };
    "media/videos" = {
      type = "zfs_fs";
      options.compression = "zstd-3";
      options.recordsize = "1M";
      mountpoint = "/media/videos";
    };
    "media/raw" = {
      type = "zfs_fs";
      options.compression = "zstd-7";
      options.recordsize = "1M";
      mountpoint = "/media/raw";
    };
    "media/archive" = {
      type = "zfs_fs";
      options.compression = "zstd-19";
      options.recordsize = "1M";
      mountpoint = "/media/archive";
    };
  } extra
