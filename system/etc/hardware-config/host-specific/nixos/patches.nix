{ pkgs, ... }:

let
  it87BasePath = "/sys/devices/platform/it87.1840";
in
{
  services.hardware.openrgb.enable = true;
  systemd.services.fancontrol.enable = true;
  environment.systemPackages = with pkgs; [ 
    openrgb
    lm_sensors
    nvtopPackages.nvidia
  ];
  boot.initrd.compressor = "zstd";
  boot.kernelModules = [ "it87" "coretemp" "lm75" ];
  boot.extraModprobeConfig = ''
    options it87 force_id=0x8628
  '';
  boot.initrd.compressorArgs = [ "-1" "-T0" ];
  boot.kernelParams = [
    "mitigations=off"
    "nohz_full=1-11"
  ];
  boot.kernel.sysctl = {
    "kernel.numa_balancing" = 1;
    "vm.swappiness" = 5;
    "vm.dirty_ratio" = 10;
    "vm.dirty_background_ratio" = 5;
  };

  boot.blacklistedKernelModules = [
    "tpm_crb" 
    "watchdog"
    "vivaldi_fmap"
    "serial8250"
    "atkbd" 
  ];
  hardware.nvidia.nvidiaSettings = true;

  programs.coolercontrol = {
    enable = true;
  };   
}