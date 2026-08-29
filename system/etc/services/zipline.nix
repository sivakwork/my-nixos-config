{ config, hostName, ... }:
if (hostName == "node") then {
  networking.firewall.allowedTCPPorts = [ 3000 ];
  services.zipline = {
    enable = true;
    
    database.createLocally = true;

    settings = {
      CORE_PORT = 3000;
      CORE_HOST = "0.0.0.0";
      CORE_HOSTNAME = "0.0.0.0";
    };

    environmentFiles = [ config.sops.templates.zipline_env.path ];
  };

  sops.secrets.zipline_core_secret = {
    mode = "777";
    sopsFile = ../../../secrets/etc/zipline.yaml;
  };

  sops.templates.zipline_env = {
    mode = "777";
    content = ''
      CORE_SECRET="${config.sops.placeholder.zipline_core_secret}"
      filesMaxFileSize="30GB"
    '';
    restartUnits = [ "zipline.service" ];
  };
} else {}