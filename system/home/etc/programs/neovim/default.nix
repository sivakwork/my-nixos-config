{ hostName, lib, inputs, pkgs, ... }:

if hostName == "nixos" then {

  xdg.configFile."nvim/init.lua".source = ./nvim/init.lua;
  xdg.configFile."nvim/lua".source = ./nvim/lua;
  home.packages = with pkgs; [
    tree-sitter

    ripgrep
    fd

    stylua
    prettierd

    eslint
    eslint_d

    typescript
    typescript-language-server
    clang-tools
    ruby
    rubyPackages.ruby-lsp
    (rWrapper.override {
      packages = with rPackages; [
        languageserver
      ];
    })
    jdk
    jdt-language-server
    kotlin
    kotlin-language-server
    julia
    beamPackages.elixir
    elixir-ls
    lua-language-server
    nil
    vscode-langservers-extracted
  ];

  programs.neovim = {
    enable = true;
  };
} else {}