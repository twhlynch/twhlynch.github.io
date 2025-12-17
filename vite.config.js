import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
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
	plugins: [
		handlebars({
			partialDirectory: 'partials',
		}),
	],
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
