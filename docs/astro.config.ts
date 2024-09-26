// @ts-check
import type { AstroIntegration } from 'astro'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import mdx from '@astrojs/mdx'
import solid from '@astrojs/solid-js'
import civet from '@danielx/civet/astro'

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
      social: {
        discord: 'https://discord.gg/SCet9ssMUg',
        github: 'https://github.com/edemaine/texlish',
      },
      sidebar: [
        {
          label: 'Homepage',
          link: '/',
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
    }),
    mdx(),
    solid(),
    civet({ts: 'preserve'}) as AstroIntegration,
  ],
})
