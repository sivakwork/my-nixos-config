{
  networking.nat.forwardPorts = [
    {
      sourcePort = 25565;
      proto = "tcp";
      destination = "10.100.0.1:25565";
    }

    {
      sourcePort = 19132;
      proto = "udp";
      destination = "10.100.0.1:19132";
    }
  ];
}