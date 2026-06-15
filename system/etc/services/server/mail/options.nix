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
        default = "/var/lib/acme/sivak.work/privkey.pem";
      };
      fullchain = lib.mkOption {
        type = lib.types.str;
        default = "/var/lib/acme/sivak.work/fullchain.pem";
      };
    };
  };
}