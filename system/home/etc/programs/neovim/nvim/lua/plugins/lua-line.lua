return {
  {
    "nvim-lualine/lualine.nvim",
    dependencies = {
      "nvim-tree/nvim-web-devicons",
    },

    opts = {
      options = {
        theme = "auto",
        globalstatus = true,
        component_separators = "",
        section_separators = "",
      },

      sections = {
        lualine_a = { "mode" },
        lualine_b = { "branch" },
        lualine_c = { "filename" },

        lualine_x = {
          "diagnostics",
          "encoding",
          "filetype",
        },

        lualine_y = { "progress" },
        lualine_z = { "location" },
      },
    },
  },
}