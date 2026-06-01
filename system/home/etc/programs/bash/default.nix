{ config, pkgs, inputs, ...}:

{
    programs.bash = {
        enable = true;
        shellAliases = {
            rebuild = "sudo nixos-rebuild switch --flake ~/nixos-config";
            nixcmd-gc = "nix-collect-garbage -d";
        };

        initExtra = ''
            rebuild-remote() {
                nixos-rebuild switch --flake .#''$1 --target-host root@''$1.local
            }
            nixcmd-gc-remote() {
                ssh ''$1.local nix-collect-garbage -d
            }
            export PS1='\[\e[38;5;33;1m\]\u\[\e[0m\] \[\e[3m\]in\[\e[0m\] \[\e[38;5;202m\]\w\[\e[0m\] \$ '
        '';
    };
}