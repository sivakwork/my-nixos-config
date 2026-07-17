{
  networking.nat.forwardPorts = [
    {
      sourcePort = 143;
      proto = "tcp";
      destination = "10.100.0.1:143";
    }

    {
      sourcePort = 993;
      proto = "tcp";
      destination = "10.100.0.1:993";
    }
  ];
}
