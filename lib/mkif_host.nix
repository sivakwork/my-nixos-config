{ lib, hostName }:
let 
  hostMkIf = builtins.listToAttrs (lib.map (
    name: { 
      inherit name; 
      value = (a: lib.mkIf (hostName == name) a); 
    }) 
  (lib.mapAttrsToList 
    (name: _: lib.removeSuffix ".nix" name) 
    (builtins.readDir ../system/hosts)
  ));
in
  hostMkIf