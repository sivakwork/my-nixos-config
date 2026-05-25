{ lib, ... }:
{ 
  options.myMail = {
    domain = lib.mkOption {
      type = lib.types.str;
      default = "sivak.work";
    };
    host = lib.mkOption {
      type = lib.types.str;
      default = "sivak.work";
    };
    ssl_tls = {
      key = lib.mkOption {
        type = lib.types.str;
        default = "/srv/containers/nginx/letsencrypt/live/npm-2/privkey.pem";
      };
      fullchain = lib.mkOption {
        type = lib.types.str;
        default = "/srv/containers/nginx/letsencrypt/live/npm-2/fullchain.pem";
      };
    };
  };
}