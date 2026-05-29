{ lib }:

{
  importDirs = path: 
    let
      dir = builtins.readDir path;
      dirs = lib.filterAttrs 
        (
          name: type: 
          type == "directory" &&
          builtins.pathExists (path + "/${name}/default.nix")
        )
        dir;
    in lib.mapAttrsToList (
        name: _:
        (path + "/${name}/default.nix")
      ) dirs;


  importFiles = path:
    let 
      dir = builtins.readDir path;
      files = lib.filterAttrs
        (
          name: type:
          name != "default.nix" &&
          lib.strings.hasSuffix ".nix" name &&
          type == "regular" 
        )
        dir;
    in lib.mapAttrsToList (
        name: _:
        (path + "/${name}")
      ) files;
}
