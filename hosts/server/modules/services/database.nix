{ config, lib, pkgs, ... }:

{
  services.postgresql = {
    enable = true;
    enableTCPIP = true;
    authentication = ''
      local   all    all                    peer
      host    all    all    10.88.0.0/16    scram-sha-256
    '';
  };
}