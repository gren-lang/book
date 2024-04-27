import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://gren-lang.org',
  base: '/book',
  outDir: './docs',
  integrations: [
    starlight({
      title: 'The Gren Programming Language',
      favicon: '/favicon.png',
      social: {
				github: 'https://github.com/gren-lang/book',
				mastodon: 'https://fosstodon.org/@gren_lang',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Why Gren', link: '/' },
						{ label: 'Hello World', link: '/hello_world/' },
					],
				},
			  {
					label: 'The Language',
					items: [
						{ label: 'Getting started', link: '/syntax/repl/' },
						{ label: 'Constants', link: '/syntax/constants/' },
						{ label: 'Functions', link: '/syntax/functions/' },
						{ label: 'Numbers', link: '/syntax/numbers/' },
						{ label: 'Arrays', link: '/syntax/arrays/' },
						{ label: 'Strings', link: '/syntax/strings/' },
            { label: 'Records', link: '/syntax/records/' },
						{ label: 'Types', link: '/syntax/types/' },
						{ label: 'If expressions', link: '/syntax/ifs/' },
						{ label: 'Custom types', link: '/syntax/custom_types/' },
						{ label: 'Pattern matching', link: '/syntax/pattern_matching/' },
						{ label: 'Modules', link: '/syntax/modules/' },
						{ label: 'Comments', link: '/syntax/comments/' },
					],
				},
				{
					label: 'Appendix',
					items: [
						{ label: 'gren.json', link: '/appendix/gren_json/' },
						{ label: 'FAQ', link: '/appendix/faq/' },
					],
				},
      ],
    }),
  ]
});
