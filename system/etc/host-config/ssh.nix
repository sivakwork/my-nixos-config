{ hostName, lib, ... }:
{
  users.users.sivak.openssh.authorizedKeys.keys =
    lib.optional (hostName == "vps") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIL9oTaIzdfXPDn0+P+fWZFIzyLoh7iVrTiY+Sy3Asuab" ++
    lib.optional (hostName == "server") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIpjR/2s3JYonx8Qm0PUd6BOYiZhhvlYMbGozsaXXMr7" ++
    lib.optional (hostName == "node") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKOs1uIPIqNCuYmC0CGoKtN1cDl0iiIndesdBOmcQUhP" ++
    lib.optional (hostName == "nixos") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIALA7TwoTShHzp/gLpjMl+exab70xxh3Xiua5nEP+RUt";

  users.users.root.openssh.authorizedKeys.keys =
    lib.optional (hostName == "vps") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIL9oTaIzdfXPDn0+P+fWZFIzyLoh7iVrTiY+Sy3Asuab" ++
    lib.optional (hostName == "server") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIpjR/2s3JYonx8Qm0PUd6BOYiZhhvlYMbGozsaXXMr7" ++
    lib.optional (hostName == "node") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKOs1uIPIqNCuYmC0CGoKtN1cDl0iiIndesdBOmcQUhP" ++
    lib.optional (hostName == "nixos") "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIALA7TwoTShHzp/gLpjMl+exab70xxh3Xiua5nEP+RUt";

  services.openssh = {
    enable = true;
    settings = {
      PasswordAuthentication = false;
      KbdInteractiveAuthentication = false;
      PermitRootLogin = lib.mkIf (hostName == "vps" || hostName == "laptop" || hostName == "server" || hostName == "node" ) "prohibit-password";
    };
  };
}
