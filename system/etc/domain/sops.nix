{config, ...}:
let 
  file = ../../../secrets/etc/cloudflare.yaml;
in 
{
  sops.secrets.cloudflare_token = {
    sopsFile = file;
  };

  sops.templates."cert_env" = {
    content = ''
      CLOUDFLARE_DNS_API_TOKEN=${config.sops.placeholder.cloudflare_token}
    '';
  };
}