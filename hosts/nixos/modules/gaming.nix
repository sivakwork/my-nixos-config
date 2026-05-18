{ config, lib, pkgs, inputs, ... }:

let
  pkgs_24_05 = import inputs.nixpkgs-24_05 {
    system = pkgs.system;
  };
in
{
    boot.kernelParams = [
      "intel_pstate=disable" # Manage CPU preformence urself
    ];
    programs.steam = {
        enable = true;
        remotePlay.openFirewall = true;
        dedicatedServer.openFirewall = true;
    };

    programs.alvr = {
        enable = true;
        openFirewall = true;
        package = pkgs_24_05.alvr;
    };

    environment.systemPackages = [
      (pkgs.stdenv.mkDerivation {
        name = "protonhax";
        src = pkgs.fetchFromGitHub {
          owner = "jcnils";
          repo = "protonhax";
          rev = "master";
          sha256 = "sha256-P6DVRz8YUF4JY2tiEVZx16FtK4i/rirRdKKZBslbJxU=";
        };

        installPhase = ''
          mkdir -p $out/bin
          cp protonhax $out/bin/protonhax
          chmod +x $out/bin/protonhax
        '';
      })
  ];
}