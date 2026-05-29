{ lib, hostName }:
let 
  hostMkIf = lib.map (
    name: { 
      inherit name; 
      value = (a: lib.mkIf (hostName == name) a); 
    }) 
  (lib.mapAttrsToList 
    (name: _: lib.removeSuffix ".nix" name) 
    (builtins.readDir ../systems/hosts)
  );
in
  hostMkIf