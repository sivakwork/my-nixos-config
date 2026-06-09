{config, ...}:
let 
  file = ../../../../../secrets/global.yaml;
in 
{
  sops.secrets = {
    vpn_user = {
      sopsFile = file;
    };
    vpn_passwd = {
      sopsFile = file;
    };
  };

  sops.templates."gluetun_env" = {
    content = ''
      OPENVPN_USER=${config.sops.placeholder."vpn_user"}
      OPENVPN_PASSWORD=${config.sops.placeholder."vpn_passwd"}
    '';
    restartUnits = [ "podman-gluetun.service" ];
  };
}