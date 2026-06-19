{ config, ... }:
{
  systemd.tmpfiles.rules =
    let
      cfg = config.services.forgejo;
      img = ./assets/logo.png;
    in [
      "d '${cfg.customDir}/public' 0750 ${cfg.user} ${cfg.group} - -"
      "d '${cfg.customDir}/public/assets' 0750 ${cfg.user} ${cfg.group} - -"
      "d '${cfg.customDir}/public/assets/img' 0750 ${cfg.user} ${cfg.group} - -"

      # "L+ '${cfg.customDir}/public/assets/img/logo.svg' - - - - ${img}/logo.svg"
      "L+ '${cfg.customDir}/public/assets/img/logo.png' - - - - ${img}/logo.png"
      # "L+ '${cfg.customDir}/public/assets/img/apple-touch-icon' - - - - ${img}/logo.png"
      # "L+ '${cfg.customDir}/public/assets/img/favicon.svg' - - - - ${img}/favicon.svg"
      "L+ '${cfg.customDir}/public/assets/img/favicon.png' - - - - ${img}/favicon.png"
    ];
}