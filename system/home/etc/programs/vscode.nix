{ lib,config, pkgs, inputs, hostName, ...}:
let 
    condition = (config.home.username == "sivak" && (hostName == "nixos" || hostName == "laptop"));
in
{
    programs.vscode = lib.mkIf condition {
        enable = true;
        profiles.default.extensions = with pkgs.vscode-extensions; [ 
            jnoortheen.nix-ide
        ];
    };
}