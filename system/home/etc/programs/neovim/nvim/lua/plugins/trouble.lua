return {
  {
    "folke/trouble.nvim",
    cmd = "Trouble",
    opts = {},

    keys = {
      {
        "<leader>xx",
        "<cmd>Trouble diagnostics toggle<cr>",
        desc = "Diagnostics",
      },
      {
        "<leader>xX",
        "<cmd>Trouble diagnostics toggle filter.buf=0<cr>",
        desc = "Buffer diagnostics",
      },
      {
        "<leader>xr",
        "<cmd>Trouble lsp_references toggle<cr>",
        desc = "LSP references",
      },
      {
        "<leader>xd",
        "<cmd>Trouble lsp_definitions toggle<cr>",
        desc = "LSP definitions",
      },
      {
        "<leader>xq",
        "<cmd>Trouble qflist toggle<cr>",
        desc = "Quickfix list",
      },
      {
        "<leader>xl",
        "<cmd>Trouble loclist toggle<cr>",
        desc = "Location list",
      },
    },
  },
}