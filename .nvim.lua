vim.keymap.set("n", "<leader>B", function()
	local command = '$SHELL -i -c "open http://localhost:5173/ && nvm use 22 && npm run dev"'
	vim.fn.system("tmux kill-window -t npm 2>/dev/null")
	vim.fn.system("tmux new-window -d -n npm '" .. command .. "'")
end, { desc = "Build & Run" })
