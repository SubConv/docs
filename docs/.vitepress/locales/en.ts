import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  description: "Yet Another Subscription Converter for Clash",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SubConv/SubConv' }
    ],
    editLink: {
      pattern: 'https://github.com/SubConv/SubConv/edit/main/docs/:path'
    },
    footer: {
      message: 'Released under the MPL-2.0 License.',
      copyright: 'Copyright © 2022-present wouiSB'
    }
  }
})


function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/introduction/what-is-subconv'},
    { text: 'GitHub', link: 'https://github.com/SubConv/SubConv'}
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is SubConv', link: '/guide/introduction/what-is-subconv' },
        { text: 'Why SubConv', link: '/guide/introduction/why-subconv' },
        { text: 'Getting Started', link: '/guide/introduction/getting-started' }
      ]
    },
    {
      text: 'Deploy',
      collapsed: false,
      items: [
        { text: 'Deploy on Vercel', link: '/guide/deploy/vercel' },
        { text: 'Deploy with Docker', link: '/guide/deploy/docker'},
        { text: 'Deploy on VPS or PC (binary file)', link: '/guide/deploy/vps' },
        { text: 'How to Update', link: '/guide/deploy/update' }
      ]
    },
    {
      text: 'Configuration',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/guide/configuration/overview'},
        { text: 'Rule Set', link: '/guide/configuration/rule-set' },
        { text: 'Proxy Groups', link: '/guide/configuration/proxy-groups' }
      ]
    },
    {
      text: 'Advanced Usage',
      collapsed: false,
      items: [
        { text: 'APIs', link: '/guide/advanced-usage/apis' }
      ]
    }
  ]
}