{
  rebuild = "sudo nixos-rebuild switch --flake ~/nixos-config";
  nixcmd-gc = "nix-collect-garbage -d";
  rebuild-vps = "nixos-rebuild switch --flake .#vps --target-host root@sivak.work";
}