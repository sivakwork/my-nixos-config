{ config, lib, pkgs, ... }:

let 
    unfreePackages = [];
    packages = with pkgs; [
        git
        btop
        inetutils
    ];
in
{
    # This part was AI generated, I didnt even know this was a thing im still new :/
    options.my.unfreePackages = lib.mkOption {
        type = lib.types.listOf lib.types.str;
        default = unfreePackages;
        description = "Whitelist of allowed unfree packages";
    };

    config = { 
        nixpkgs.config.allowUnfreePredicate = pkg: builtins.elem (lib.getName pkg) config.my.unfreePackages;
        environment.systemPackages = packages;
    };
}