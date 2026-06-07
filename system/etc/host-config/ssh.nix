{ hostName, lib, ... }:
{
   services.openssh.enable = true;
   services.openssh.settings.PermitRootLogin = lib.mkIf (hostName == "vps" || hostName == "laptop" || hostName == "server") "yes";
}