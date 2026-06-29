{ config, ... }:
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
}