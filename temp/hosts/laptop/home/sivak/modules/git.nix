{ config, pkgs, inputs, ...}:

{
    programs.git = {
        enable = true;
        settings = {
            user = {
                name = "Sivak";
                email = "141945552+sivakwork@users.noreply.github.com";
            };
        };
    };
}