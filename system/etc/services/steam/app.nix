{ projectLib, ...}:
let 
  mkIfHost = projectLib.mkif_host;
in 
{
   programs.steam = mkIfHost.nixos {
    enable = true;
    remotePlay.openFirewall = true;
    dedicatedServer.openFirewall = true;
  };
}