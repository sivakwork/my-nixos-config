{ config, pkgs, inputs, ...}:

{
    imports = [
        ./spicetify/default.nix
        ./git.nix
        ./packages.nix
        ./vscode.nix
        ./vesktop.nix
        ./bash.nix
        ./configuration.nix
    ];
}