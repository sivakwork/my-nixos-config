{ config, pkgs, inputs, ...}:

{
    programs.bash = {
        enable = true;
        shellAliases = {
            rebuild = "sudo nixos-rebuild switch --flake ~/nixos-config";
            rebuild-server = "nixos-rebuild switch --flake .#server --target-host root@server.local";
            nixcmd-gc = "nix-collect-garbage -d";
            nixcmd-gc-server = "ssh server.local nix-collect-garbage -d";
        };

        initExtra = ''
            export PS1='\[\e[38;5;33;1m\]\u\[\e[0m\] \[\e[3m\]in\[\e[0m\] \[\e[38;5;202m\]\w\[\e[0m\] \$ '
        '';
    };
}