{ config, pkgs, ... }:
{
  nixpkgs.config.cudaSupport = true;
  hardware.graphics.enable = true;
  services.xserver.videoDrivers = [ "nvidia" ];
  hardware.nvidia = {
    modesetting.enable = true;
    nvidiaSettings = true;
    open = false;
    powerManagement = {
      enable = true;
    };
     package = config.boot.kernelPackages.nvidiaPackages.stable; 
  };


  hardware.display.edid.packages = [
    (pkgs.runCommand "dp3-edid" {} ''
      mkdir -p $out/lib/firmware/edid
      cp ${./dp3-edid.bin} $out/lib/firmware/edid/dp3-edid.bin
    '')
  ];

  boot.kernelParams = [
    "video=DP-3:e"
    "drm.edid_firmware=DP-3:edid/dp3-edid.bin"
  ];
}
