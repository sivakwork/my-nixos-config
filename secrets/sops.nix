{ inputs, config, ... }:
{
  imports = [
    inputs.sops-nix.nixosModules.sops
  ];

  sops = {
    defaultSopsFile = ./global.yaml;
    validateSopsFiles = false;

    age = {
      sshKeyPaths = [ "/etc/ssh/ssh_host_ed25519_key" ];
      keyFile = "/var/lib/sops-nix/key.txt"; # master key only exists on host nixos
      generateKey = true;
    };

    secrets = {
      postfix_dbpasswd = {
        owner = "postgres";
        group = "postgres";
        mode = "0400";
      };
      roundcube_dbpasswd = {
        owner = "postgres";
        group = "postgres";
        mode = "0400";
      };
      postfix_db_env = {};
      roundcube_db_env = {};
    };
  };
}