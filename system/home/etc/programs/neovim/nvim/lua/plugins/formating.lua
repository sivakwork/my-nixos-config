return {
  {
    "stevearc/conform.nvim",

    opts = {
      formatters_by_ft = {
        lua = { "stylua" },
        nix = { "nixfmt" },

        javascript = { "prettierd", "prettier" },
        typescript = { "prettierd", "prettier" },
        javascriptreact = { "prettierd", "prettier" },
        typescriptreact = { "prettierd", "prettier" },
        html = { "prettierd", "prettier" },
        css = { "prettierd", "prettier" },
        json = { "prettierd", "prettier" },

        c = { "clang_format" },
        cpp = { "clang_format" },
      },

      format_on_save = {
        timeout_ms = 500,
        lsp_format = "fallback",
      },
    },

    keys = {
      {
        "<leader>f",
        function()
          require("conform").format({
            async = true,
            lsp_format = "fallback",
          })
        end,
        mode = { "n", "v" },
        desc = "Format file",
      },
    },
  },
}