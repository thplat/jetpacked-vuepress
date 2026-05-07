import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Deployed with Jetpacked',
  description: 'A minimal VuePress site deployed via Jetpacked.ai',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Deployment', link: '/guide/deployment' },
      ],
    },
  }),
  bundler: viteBundler(),
})
