{ hostName, lib, ... }:
{
   services.openssh.enable = true;
   services.openssh.settings.PermitRootLogin = lib.mkIf (hostName == "nixvm") "yes";
}