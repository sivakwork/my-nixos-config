return {
  {
    "neovim/nvim-lspconfig",
    config = function()
    vim.lsp.enable({
        "ts_ls",                 -- TypeScript / JavaScript
        "clangd",                -- C / C++
        "ruby_lsp",              -- Ruby
        "r_language_server",     -- R
        "jdtls",                 -- Java
        "kotlin_language_server",-- Kotlin
        "julials",               -- Julia
        "elixirls",              -- Elixir
        "lua_ls",                -- Lua
        "nil_ls",                -- Nix
        "html",                  -- HTML
        "cssls",                 -- CSS
        "jsonls",                -- JSON
    })

      vim.api.nvim_create_autocmd("LspAttach", {
        callback = function(event)
          local map = function(keys, func, desc)
            vim.keymap.set("n", keys, func, {
              buffer = event.buf,
              desc = desc,
            })
          end

          map("gd", vim.lsp.buf.definition, "Go to definition")
          map("gr", vim.lsp.buf.references, "Go to references")
          map("K", vim.lsp.buf.hover, "Hover docs")
          map("<leader>rn", vim.lsp.buf.rename, "Rename")
          map("<leader>ca", vim.lsp.buf.code_action, "Code action")
          map("<leader>d", vim.diagnostic.open_float, "Show diagnostic")
          map("[d", vim.diagnostic.goto_prev, "Previous diagnostic")
          map("]d", vim.diagnostic.goto_next, "Next diagnostic")
        end,
      })
    end,
  },
}