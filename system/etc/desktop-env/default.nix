{ projectLib, ... }:

{
  imports = projectLib.by_host.files ./host-specific;
}