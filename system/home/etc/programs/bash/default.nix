{ config, pkgs, inputs, ...}:

{
    programs.bash = {
        enable = true;
        shellAliases = {
            rebuild = "sudo nixos-rebuild switch --flake ~/nixos-config";
            nixcmd-gc = "nix-collect-garbage -d";
            rebuild-vps = "nixos-rebuild switch --flake .#vps --target-host root@sivak.work";
        };

        initExtra = ''
            rebuild-local() {
                nixos-rebuild switch --flake .#''$1 --target-host root@''$1.local
            }
            nixcmd-gc-remote() {
                ssh ''$1.local nix-collect-garbage -d
            }
            export PS1='\[\e[38;5;33;1m\]\u\[\e[0m\] \[\e[3m\]in\[\e[0m\] \[\e[38;5;202m\]\w\[\e[0m\] \$ '
            rebuild-remote() {
                case "''$1" in
                    server) ip=10.100.0.1 ;;
                    vps)    ip=10.100.0.2 ;;
                    node)   ip=10.100.0.3 ;;
                    nixos)  ip=10.100.0.4 ;;
                    laptop) ip=10.100.0.5 ;;
                    *) echo "Unknown host: $1"; return 1 ;;
                esac

                nixos-rebuild switch --flake .#''$1 --target-host root@''$ip
            }
        '';
    };
}