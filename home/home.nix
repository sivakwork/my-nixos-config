{ config, pkgs, inputs, ...}:

{
    imports = [
        ./modules/git.nix
        ./modules/packages.nix
        ./modules/spicetify.nix
        ./modules/vesktop.nix
        inputs.spicetify-nix.homeManagerModules.default
    ];

    home.username = "sivak";
    home.homeDirectory = "/home/sivak";
    home.stateVersion = "25.11";

    programs.bash = {
        enable = true;
        shellAliases = {
            rebuild = "sudo nixos-rebuild switch --flake ~/nixos-config";
        };

        initExtra = ''
            export PS1='\[\e[38;5;33;1m\]\u\[\e[0m\] \[\e[3m\]in\[\e[0m\] \[\e[38;5;202m\]\w\[\e[0m\] \$ '
        '';
    };

    programs.vscode = {
        enable = true;
        profiles.default.extensions = with pkgs.vscode-extensions; [
        ];
    };

    xdg.userDirs = {
        createDirectories = true;
    };
}
