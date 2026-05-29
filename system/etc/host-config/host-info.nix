{ hostName, ... }:

{
  networking.hostName = hostName;
  time.timeZone = "America/Toronto";
  i18n.defaultLocale = "en_US.UTF-8";
}