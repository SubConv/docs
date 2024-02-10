import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  description: "又一个 Clash 订阅转换",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      'zh_CN/guide/': sidebarGuide()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SubConv/SubConv' }
    ],
    editLink: {
      pattern: 'https://github.com/SubConv/SubConv/edit/main/docs/:path'
    },
    footer: {
      message: '在 MPL-2.0 许可证下发布。',
      copyright: 'Copyright © 2022-现在 wouiSB</a>'
    }
  }
})


function nav() {
  return [
    { text: '首页', link: '/zh_CN/' },
    { text: '指南', link: '/zh_CN/guide/introduction/what-is-subconv'},
    { text: 'GitHub', link: 'https://github.com/SubConv/SubConv'}
  ]
}

function sidebarGuide() {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 SubConv', link: '/zh_CN/guide/introduction/what-is-subconv' },
        { text: '为什么使用 SubConv', link: '/zh_CN/guide/introduction/why-subconv' },
        { text: '开始使用', link: '/zh_CN/guide/introduction/getting-started' }
      ]
    },
    {
      text: '部署',
      collapsed: false,
      items: [
        { text: '在 Vercel 上部署', link: '/zh_CN/guide/deploy/vercel' },
        { text: '使用 Docker 部署', link: '/zh_CN/guide/deploy/docker'},
        { text: '在 VPS 或 PC 上部署（二进制文件）', link: '/zh_CN/guide/deploy/vps' },
        { text: '如何更新', link: '/zh_CN/guide/deploy/update' }
      ]
    },
    {
      text: '配置',
      collapsed: false,
      items: [
        { text: '概述', link: '/zh_CN/guide/configuration/overview' },
        { text: '规则集', link: '/zh_CN/guide/configuration/rule-set' },
        { text: 'Proxy Groups', link: '/zh_CN/guide/configuration/proxy-groups' }
      ]
    },
    {
      text: '高级用法',
      collapsed: false,
      items: [
        { text: 'APIs', link: '/zh_CN/guide/advanced-usage/apis' }
      ]
    }

  ]
}