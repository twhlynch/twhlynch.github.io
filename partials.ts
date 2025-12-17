import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

// {{> partial variable="example" }}
const PARTIAL_REGEX = /\{\{\>\s*(\w+)(?:\s+([^}]+))?\s*\}\}/g;
// {{ js expression }}
const JS_EXPR_REGEX = /\{\{\s*([\s\S]+?)\s*\}\}/g;
// variable="value"
const ATTR_REGEX = /(\w+)=["']([^"']+)["']/g;

const DIRECTORY = 'partials';

type Context = Record<string, any>;

function parse_attrs(attr_string: string | undefined): Context {
	const attrs: Context = {};
	if (!attr_string) return attrs;

	let match: RegExpExecArray | null;
	while ((match = ATTR_REGEX.exec(attr_string))) {
		attrs[match[1]] = match[2];
	}

	return attrs;
}

function find_partial(name: string, root: string): string | null {
	const dir = path.resolve(root, DIRECTORY);
	if (!fs.existsSync(dir)) return null;

	const files = fs.readdirSync(dir);
	for (const file of files) {
		if (path.parse(file).name === name) return path.join(dir, file);
	}

	return null;
}

function render_partials(content: string, root: string = process.cwd()): string {
	return content.replace(PARTIAL_REGEX, (_, name, attr) => {
		const file_path = find_partial(name, root);
		if (!file_path) throw new Error(`Could not find ${name} in ${DIRECTORY}`);

		const partial_content = fs.readFileSync(file_path, 'utf8');
		const attrs = parse_attrs(attr);

		return render(partial_content, attrs, root);
	});
}

function evaluate_expressions(content: string, context: Context = {}): string {
	return content.replace(JS_EXPR_REGEX, (_, expr) => {
		// make all variables exist as undefined to allow `title ?? 'default'`
		const safeContext = new Proxy(context, {
			has: () => true,
			get: (target, prop) => target[prop as string],
		});
		const fn = new Function('ctx', `with (ctx) { return (${expr}) }`);

		return fn(safeContext);
	});
}

function render(content: string, context: Context = {}, root: string = process.cwd()): string {
	// substitute partials first
	content = render_partials(content, root);
	// then evaluate js expression
	content = evaluate_expressions(content, context);

	return content;
}

export default function partials(): Plugin {
	// runs on all build input files
	function transform_input(html: string) {
		return render(html);
	}

	// full reload on changes
	function hot_update({ file, server }) {
		if (!file.startsWith(path.resolve(process.cwd(), DIRECTORY))) return;
		server.ws.send({ type: 'full-reload', path: '*' });
		return [];
	}

	return {
		name: 'vite-partials',
		enforce: 'pre',
		transformIndexHtml: transform_input,
		handleHotUpdate: hot_update,
	};
}
