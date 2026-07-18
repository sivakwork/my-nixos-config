''
rebuild-local() {
    nixos-rebuild switch --flake .#''$1 --target-host root@''$1.local
}
nixcmd-gc-remote() {
    ssh ''$1.local nix-collect-garbage -d
}
nvim() {
    if [ -n "$KITTY_WINDOW_ID" ]; then
        kitten @ set-spacing --match "id:$KITTY_WINDOW_ID" padding-left=0 padding-top=0 padding-bottom=0 padding-right=0
    fi
    command nvim "$@"
    if [ -n "$KITTY_WINDOW_ID" ]; then
        kitten @ set-spacing --match "id:$KITTY_WINDOW_ID" default
    fi
}
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
''
