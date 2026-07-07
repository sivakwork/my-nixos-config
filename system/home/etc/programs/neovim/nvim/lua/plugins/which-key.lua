return {
  {
    "folke/which-key.nvim",
    event = "VeryLazy",

    opts = {
      preset = "modern",
      delay = 300,
      spec = {
        { "<leader>f", group = "telescope" },
        { "<leader>x", group = "trouble" },
        { "<leader>h", group = "harpoon" },
      },
    },
  },
}