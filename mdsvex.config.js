import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import { addCopyButton } from 'shiki-transformer-copy-button';

import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['poimandres'],
	langs: ['javascript', 'typescript']
});
const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	highlight: {
		highlighter: async (code, lang = 'text') => {
			await highlighter.loadLanguage('javascript', 'typescript', 'http', 'powershell');
			const html = escapeSvelte(
				highlighter.codeToHtml(code, { lang, theme: 'poimandres', transformers: [addCopyButton()] })
			);
			return `{@html \`${html}\` }`;
		}
	},

	remarkPlugins: []
	// rehypePlugins: [[rehypePrettyCode, options]]
});

export default config;
