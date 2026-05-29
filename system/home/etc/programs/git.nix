{ config, pkgs, inputs, ...}:

{
    programs.git = {
        enable = true;
        settings = {
            user = {
                name = "Sivak";
                email = "me@sivak.work";
            };
        };
    };
}