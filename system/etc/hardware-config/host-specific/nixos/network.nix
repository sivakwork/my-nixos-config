{
  networking.useDHCP = false;
  networking.useNetworkd = true;

systemd.network.networks."10-eth" = {
  matchConfig.Name = "enp3s0";
  networkConfig.Address = "192.168.18.2/24";
  networkConfig.Gateway = "192.168.18.1";
  networkConfig.DNS = "1.1.1.1";
};
}