return {
  {
    "akinsho/toggleterm.nvim",
    version = "*",

    opts = {
      size = 15,
      open_mapping = [[<C-\>]],
      direction = "float",

      float_opts = {
        border = "curved",
      },
    },

    keys = {
      {
        "<leader>tt",
        "<cmd>ToggleTerm<cr>",
        desc = "Toggle terminal",
      },
      {
        "<leader>tf",
        "<cmd>ToggleTerm direction=float<cr>",
        desc = "Floating terminal",
      },
      {
        "<leader>th",
        "<cmd>ToggleTerm direction=horizontal<cr>",
        desc = "Horizontal terminal",
      },
      {
        "<leader>tv",
        "<cmd>ToggleTerm direction=vertical<cr>",
        desc = "Vertical terminal",
      },
    },
  },
}