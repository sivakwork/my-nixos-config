{ config, lib, pkgs, hostName, ... }:

if (hostName == "nixos") then {
  nix = {
    distributedBuilds = true;

    buildMachines = [
      {
        hostName = "edge.local";
        protocol = "ssh-ng";
        sshUser = "root";
        system = "x86_64-linux";
        maxJobs = 4;
        speedFactor = 2;
        supportedFeatures = [];
      }

      {
        hostName = "node.local";
        protocol = "ssh-ng";
        sshUser = "root";
        system = "x86_64-linux";
        maxJobs = 1;
        speedFactor = 2;
        supportedFeatures = [];
      }

      {
        hostName = "server.local";
        protocol = "ssh-ng";
        sshUser = "root";
        system = "x86_64-linux";
        maxJobs = 1;
        speedFactor = 1;
        supportedFeatures = [];
      }
    ];

    settings = {
      max-jobs = 1;
      cores = 0;
      builders-use-substitutes = true;
      auto-optimise-store = true;
    };
  };
} else {}
