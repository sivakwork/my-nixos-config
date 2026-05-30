{
  sops = {
    defaultSopsFile = ../../secrets/global.yaml;
    validateSopsFiles = false;

    age = {
      sshKeyPaths = [ "/etc/ssh/ssh_host_ed25519_key" ];
      keyFile = "/var/lib/sops-nix/key.txt"; # master key only exists on host nixos
      generateKey = true;
    };
  };
}