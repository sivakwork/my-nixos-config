{ config, pkgs, inputs, lib, ... }:

let
    spicePkgs = inputs.spicetify-nix.legacyPackages.${pkgs.stdenv.hostPlatform.system};
in
{
    programs.spicetify = {
        enable = true;

        enabledExtensions = with spicePkgs.extensions; [
            adblock
            hidePodcasts
            shuffle # shuffle+ (special characters are sanitized out of extension names)
        ];

        enabledCustomApps = with spicePkgs.apps; [
            # newReleases
            ncsVisualizer
            ({
                name = "iv-lyrics";
                src = builtins.fetchTarball {
                     url = "https://github.com/ivLis-Studio/ivLyrics/archive/v4.3.2.tar.gz";
                     sha256 = "11dm53askc3sgirlf18n8irjm5j5b18jfin48qswfz0rrnmhiwgc";
                };
            })
            ({
                name = "listening-stats";
                src = ./listening-stats;
            })
        ];

        enabledSnippets = with spicePkgs.snippets; [
            # rotatingCoverart
            # pointer
        ];

        theme = spicePkgs.themes.dribbblish;
        colorScheme = "lunar";
    };
}