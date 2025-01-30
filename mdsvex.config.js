import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import rehypeExpressiveCode from 'rehype-expressive-code';

/** @type {import('rehype-expressive-code').RehypeExpressiveCodeOptions} */
const rehypeExpressiveCodeOptions = {
	themes: ['dracula', 'github-light'],
	styleOverrides: {
		// You can also override styles
		borderRadius: '0.5rem',
		frames: {
			shadowColor: '#124'
		}
	}
};

// highlight: {
// 	highlighter: async (code, lang = 'text') => {
// 		await highlighter.loadLanguage(
// 			'javascript',
// 			'typescript',
// 			'tsx',
// 			'http',
// 			'powershell'
// 		);
// 		const html = escapeSvelte(
// 			highlighter.codeToHtml(code, { lang, theme: 'poimandres', transformers: [addCopyButton()] })
// 		);
// 		return `{@html \`${html}\` }`;
// 	}
// },

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: true,
		ellipses: true,
		quotes: true
	},

	remarkPlugins: [],
	rehypePlugins: [
		// The nested array structure is required to pass options
		// to a rehype plugin
		[rehypeExpressiveCode, rehypeExpressiveCodeOptions]
	]
});

export default config;
