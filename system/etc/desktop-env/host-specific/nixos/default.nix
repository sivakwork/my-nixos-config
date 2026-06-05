{ config, lib, pkgs, ... }:

{

  security.polkit.enable = true;

  programs.niri.enable = true;
  environment.systemPackages = with pkgs; [
    xwayland-satellite
    wl-clipboard
    tuigreet
    bibata-cursors
  ];

  services.greetd = {
    enable = true;
    settings = {
      default_session = {
        command = "${pkgs.tuigreet}/bin/tuigreet --cmd niri-session";
        user = "greeter";
      };

      initial_session = {
        command = "${pkgs.tuigreet}/bin/tuigreet --cmd niri-session";
        user = "greeter";
      };
    };
    useTextGreeter = true;
  };
}
