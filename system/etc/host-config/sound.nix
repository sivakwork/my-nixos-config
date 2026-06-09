{ hostName, lib, ... }:
{
  services.pipewire = lib.mkIf (hostName != "vps") {
    enable = true;
    alsa.enable = true;
    pulse.enable = true;
    wireplumber.enable = true;
    alsa.support32Bit = true;
  };
}