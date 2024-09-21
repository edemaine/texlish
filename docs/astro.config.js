// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import mdx from '@astrojs/mdx'
import solid from '@astrojs/solid-js'
import civet from '@danielx/civet/astro'

// https://astro.build/config
export default defineConfig({
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
      ],
    }),
    mdx(),
    solid(),
    civet({ts: 'preserve'}),
  ],
})
