{ lib, pkgs, config, ... }:
let 
  srv = config.services.forgejo.settings.server;
in { 
  services.forgejo = {
    enable = true;
    database.type = "postgres";
    lfs.enable = true;
    settings = {
      server = {
        DOMAIN = "git.server.local";
        ROOT_URL = "https://${srv.DOMAIN}/"; 
        HTTP_PORT = 3000;
      };
      service.DISABLE_REGISTRATION = true; 
      actions = {
        ENABLED = true;
        DEFAULT_ACTIONS_URL = "github";
      };
    }
  }
}