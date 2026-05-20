{ config, pkgs, inputs, ...}:

{
    imports = [
        ./spicetify/default.nix
        ./packages.nix
        ./bash.nix
        ./configuration.nix
    ];
}