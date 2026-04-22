{ config, pkgs, inputs, ... }:

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
in
{

    programs.vesktop = {
        enable = true;
        settings = settings;
        vencord.themes = {};
    };
}
