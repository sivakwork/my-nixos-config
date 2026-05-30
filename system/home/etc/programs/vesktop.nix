{ config, lib, pkgs, inputs, hostName, ... }:

let 
    settings = {
        autoUpdate = false;
        autoUpdateNotification = false;
        useQuickCss = true;
        arRPC = true;
        splashTheming = true;
        tray = false;
        customTitleBar = true;
        disableMinSize = true;
        minimizeToTray = false;
        plugins = {
            MessageLogger = {
                enabled = true;
                ignoreSelf = true;
            };
            FakeNitro.enabled = true;
        };
    };
    condition = (config.home.username == "sivak" && (hostName == "nixos" || hostName == "laptop"));
in
{

    programs.vesktop = lib.mkIf condition {
        enable = true;
        settings = settings;
        vencord.themes = {};
    };
}
