{ config, lib, pkgs, ... }:

{
  virtualisation.containers.storage.settings = {
    storage = {
      driver = "overlay";
      graphroot = "/var/lib/containers/storage";
      runroot = "/run/containers/storage";
    };
  };

  environment.systemPackages = with pkgs; [ podman-compose slirp4netns fuse-overlayfs ];

  virtualisation.podman = {
    enable = true;
    dockerCompat = true;
  };
}