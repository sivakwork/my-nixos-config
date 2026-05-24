{ config, lib, pkgs, ... }:

{
    # sops.secrets.sivak-passowrd.neededForUsers = true;
    # users.mutableUsers = false;

    users.users.sivak = {
        isNormalUser = true;
        extraGroups = [ "wheel" ];
        # hashedPasswordFile = config.sops.secrets.sivak-password.path;
        packages = with pkgs; [
            tree
        ];
    };

    security.sudo.extraConfig = ''
        Defaults timestamp_timeout=120 # only ask for password every 120 minutes yippe
    '';
}