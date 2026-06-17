{ config, lib, pkgs, hostName, ... }:

if hostName == "node" then {
  services.mysql = {
    enable = true;
    package = pkgs.mariadb;
    dataDir = "/var/lib/mysql";
    settings.mysqld = {
      port = 3306;
      bind-address = "0.0.0.0";
    };
  };

  networking.firewall.allowedTCPPorts = [
    3306
  ];
} else {}