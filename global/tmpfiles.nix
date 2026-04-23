{ config, lib, pkgs, ... }:

{
    options.my.tmpfiles.rules = lib.mkOption {
        type = lib.types.listOf lib.types.str;
        default = [];
        description = "Tmpfile rules";
    };

    config = { 
        systemd.tmpfiles.rules = config.my.tmpfiles.rules;
    };
}