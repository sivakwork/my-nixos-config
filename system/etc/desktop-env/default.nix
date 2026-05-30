{ projectLib, ... }:

{
  imports = projectLib.by_host.dirs ./host-specific;
}