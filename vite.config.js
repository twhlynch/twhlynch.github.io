import { defineConfig } from 'vite';
import partials from './partials';
import fs from 'fs';
import path from 'path';
import postcssNesting from 'postcss-nesting';

const html_files = fs
	.readdirSync(__dirname)
	.filter((file) => file.endsWith('.html'))
	.reduce((acc, file) => {
		const name = file.replace('.html', '');
		acc[name] = path.resolve(__dirname, file);
		return acc;
	}, {});

export default defineConfig({
	plugins: [partials()],
	build: {
		rollupOptions: {
			input: html_files,
		},
	},
	css: {
		postcss: {
			plugins: [postcssNesting],
		},
	},
});
