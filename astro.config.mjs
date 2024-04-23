import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'The Gren Programming Language',
      social: {
				github: 'https://github.com/gren-lang/book',
				mastodon: 'https://fosstodon.org/@gren_lang',
			},
			sidebar: [
				{
					label: 'Summary',
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
						{ label: 'Types', link: '/syntax/types/' },
						{ label: 'If expressions', link: '/syntax/ifs/' },
						{ label: 'Custom types', link: '/syntax/custom_types/' },
						{ label: 'Pattern matching', link: '/syntax/pattern_matching/' },
						{ label: 'Modules', link: '/syntax/modules/' },
						{ label: 'Comments', link: '/syntax/comments/' },
						{ label: 'FAQ', link: '/faq/' },
					],
				},
      ],
    }),
  ]
});
