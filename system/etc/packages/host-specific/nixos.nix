{ config, lib, pkgs, ... }:

{

    environment.systemPackages = with pkgs; [
        # Toolchain
        flutter
        pkg-config
    ];
    
}