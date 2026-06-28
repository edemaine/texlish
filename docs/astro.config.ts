// @ts-check
import type { AstroIntegration } from 'astro'
import type { LanguageRegistration } from 'shiki'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import mdx from '@astrojs/mdx'
import solid from '@astrojs/solid-js'
import texLanguageRegistration from 'shiki/langs/tex.mjs'
import civet from '@danielx/civet/astro'
import civetVite from '@danielx/civet/vite'
import texlishGrammarJson from '../vscode/syntaxes/texlish.tmLanguage.json' with { type: 'json' }

const texlishLanguage: LanguageRegistration = {
  ...(texlishGrammarJson as LanguageRegistration),
  name: 'texlish',
  displayName: 'Texlish',
  embeddedLangs: ['tex'],
}

// https://astro.build/config
export default defineConfig({
  site: 'https://texlish.org',
  integrations: [
    starlight({
      title: 'Texlish',
      logo: {
        src: './src/assets/logo.svg',
      },
      customCss: [
        './src/styles/theme.styl',
      ],
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/SCet9ssMUg',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/edemaine/texlish',
        },
      ],
      sidebar: [
        {
          label: 'Homepage',
          link: '/',
        },
        {
          label: 'Getting Started',
          slug: 'start',
        },
        {
          label: 'Reference',
          slug: 'reference',
        },
        {
          label: 'Playground',
          slug: 'playground',
        },
      ],
      expressiveCode: {
        shiki: {
          langs: [...texLanguageRegistration, texlishLanguage],
        },
      },
    }),
    mdx(),
    solid(),
    civet({ts: 'preserve'}) as AstroIntegration,
  ],
  vite: {
    worker: {
      format: 'es',
      plugins: () => [civetVite({ts: 'preserve'})],
    }
  }
})
