{
    programs.zsh = {
        enable = true;
        shellAliases = import(./aliases.nix);

        initContent =  import(./init.nix);
        

        enableCompletion = true;
        autosuggestion.enable = true;
        syntaxHighlighting.enable = true;
        setOptions = [
            "AUTO_CD"
        ];
        oh-my-zsh = {
            enable = true;
            theme = "";
            plugins = [ "git" "dirhistory" "history" ];
        };
    };

    programs.oh-my-posh = {
        enable = true;
        enableZshIntegration = true;

        useTheme = "catppuccin_mocha";
    };

  home.sessionPath = [
    "$HOME/.config/emacs/bin"
  ];
}
