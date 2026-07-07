-- ~/.config/nvim/lua/config/wezterm.lua

local function set_wezterm_padding(value)
  if not vim.env.WEZTERM_PANE then
    return
  end

  local encoded = value == "0" and "MA==" or "MQ=="

  io.write("\027]1337;SetUserVar=NVIM_PADDING=" .. encoded .. "\007")
  io.flush()
end

vim.api.nvim_create_autocmd("VimEnter", {
  callback = function()
    set_wezterm_padding("0")
  end,
})

vim.api.nvim_create_autocmd("VimLeavePre", {
  callback = function()
    set_wezterm_padding("1")
  end,
})