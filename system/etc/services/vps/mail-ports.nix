{
  networking.nat.forwardPorts = [
    {
      sourcePort = 25;
      proto = "tcp";
      destination = "10.100.0.1:25";
    }

    {
      sourcePort = 587;
      proto = "tcp";
      destination = "10.100.0.1:587";
    }

    {
      sourcePort = 465;
      proto = "tcp";
      destination = "10.100.0.1:465";
    }

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