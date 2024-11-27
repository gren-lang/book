import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";
import rehypeMermaid from "rehype-mermaid";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  site: 'https://gren-lang.org',
  base: '/book',
  outDir: './docs',
  integrations: [
    starlight({
      title: 'The Gren Programming Language',
      favicon: '/favicon.png',
      expressiveCode: {
        plugins: [
          pluginLineNumbers()
        ],
      },
      social: {
        github: 'https://github.com/gren-lang/book',
        mastodon: 'https://fosstodon.org/@gren_lang',
        discord: 'https://discord.gg/Chb9YB9Vmh',
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
            { label: 'Let expressions', link: '/syntax/lets/' },
            { label: 'Custom types', link: '/syntax/custom_types/' },
            { label: 'Pattern matching', link: '/syntax/pattern_matching/' },
            { label: 'Destructuring', link: '/syntax/destructuring/' },
            { label: 'Modules', link: '/syntax/modules/' },
            { label: 'Comments', link: '/syntax/comments/' },
          ],
        },
        {
          label: 'Applications',
          items: [
            { label: 'The Elm Architecture', link: '/applications/tea/' },
            { label: 'The Gren Runtime', link: '/applications/runtime/' },
            { label: 'Browser Applications', link: '/applications/browser/' },
            { label: 'Node Applications', link: '/applications/node/' },
            { label: 'Commands', link: '/applications/commands/' },
            { label: 'Tasks', link: '/applications/tasks/' },
            { label: 'Subscriptions', link: '/applications/subscriptions/' },
            { label: 'Flags', link: '/applications/flags/' },
            { label: 'Ports', link: '/applications/ports/' },
            { label: 'Nested TEA', link: '/applications/nested-tea/' },
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
  ],
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg" }]],
  },
});
