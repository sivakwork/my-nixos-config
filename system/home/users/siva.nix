{ projectLib, ... }:

{
  users.users.siva = projectLib.mkif_host.laptop {
      isNormalUser = true;
      extraGroups = [ "wheel" ];
  };
}