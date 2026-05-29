{ config, ... }:
let 
  useSystemd = config.hostConfig.bootloader == "systemd";
  useGrub = config.hostConfig.bootloader == "grub";
  isValidConfig = useGrub || useSystemd;
in {
  boot.loader.efi.canTouchEfiVariables = true;
  
  boot.loader.systemd-boot.enable = useSystemd;
  # Implement Grub later
}