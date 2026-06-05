{ config, lib, pkgs, ... }:

{

    environment.systemPackages = with pkgs; [
        # Toolchain
        clang_22
    ];
    
}