{ config, pkgs, inputs, ... }:

let 
    settings = {
        autoUpdate = false;
        autoUpdateNotification = false;
        useQuickCss = true;
        disableMinSize = true;
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
