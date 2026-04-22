{ config, pkgs, inputs, ...}:

{
    imports = [
        inputs.spicetify-nix.homeManagerModules.default
        ./modules/default.nix
    ];
}
