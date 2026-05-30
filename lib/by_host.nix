{ lib, hostName }:
{
  files = path: 
    let 
      dirs = (lib.readDir path);
    in
    lib.mapAttrsToList (name: _: path + "/${name}") (lib.filterAttrs (
      name: type:
      name == "${hostName}.nix"
    ) dirs);

  dirs = path: 
    let 
      dirs = (lib.readDir path);
    in
    lib.mapAttrsToList (name: _: path + "/${name}/default.nix") (lib.filterAttrs (
      name: type:
      name == "${hostName}"
    ) dirs);
}