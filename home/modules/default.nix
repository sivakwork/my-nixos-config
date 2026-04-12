{ config, pkgs, inputs, ...}:

{
    imports = [
        ./git.nix
        ./packages.nix
        ./spicetify.nix
        ./vesktop.nix
    ];
}