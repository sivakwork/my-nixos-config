{ hostName, ... }: 
{
  services.vscode-server.enable = (hostName == "node" || hostName == "server");
}