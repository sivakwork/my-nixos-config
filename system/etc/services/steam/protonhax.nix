{ projectLib, ...}:
let 
  mkIfHost = projectLib.mkif_host;
in 
{
  environment.systemPackages = mkIfHost.nixos [
      (pkgs.stdenv.mkDerivation {
        name = "protonhax";
        src = pkgs.fetchFromGitHub {
          owner = "jcnils";
          repo = "protonhax";
          rev = "master";
          sha256 = "sha256-P6DVRz8YUF4JY2tiEVZx16FtK4i/rirRdKKZBslbJxU=";
        };

        installPhase = ''
          mkdir -p $out/bin
          cp protonhax $out/bin/protonhax
          chmod +x $out/bin/protonhax
        '';
      })
  ];
}