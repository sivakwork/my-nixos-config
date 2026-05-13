{ config, lib, pkgs, modulesPath, ... }:

let
  blender-cuda = pkgs.blender.override {
      cudaSupport=true;
      rocmSupport=false;
    };
in {
  environment.systemPackages = with pkgs; [
    (blender-cuda.withPackages(ps: [ ]))
  ];
}