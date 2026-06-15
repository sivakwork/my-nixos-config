{ config, ... }:
{
  security.acme = {
    acceptTerms = true;
    defaults.email = "acme@sivak.work.com";

    certs."sivak.work" = {
      dnsProvider = "cloudflare";
      environmentFile = config.sops.templates.cert_env.path;
      domain = "sivak.work";
      extraDomainNames = [ "*.sivak.work" ];
    };
  };
}