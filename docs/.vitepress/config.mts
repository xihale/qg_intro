import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "QG Studio 后端组考核",
  description: "2026 QG Studio 后端组招新考核题目与问答",
  base: '/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '一轮考核', link: '/round-1/' },
      { text: '二轮考核', link: '/round-2/' },
      { text: '问答说明', link: '/qa/2026-03-16' }
    ],

    sidebar: [
      {
        text: '一轮考核',
        collapsed: false,
        items: [
          { text: '概览', link: '/round-1/' },
          { text: 'Console', link: '/round-1/week-1' },
          { text: 'SpringBoot', link: '/round-1/week-2-3' }
        ]
      },
      {
        text: '二轮考核',
        collapsed: false,
        items: [
          { text: '概览', link: '/round-2/' }
        ]
      },
      {
        text: '问答说明',
        collapsed: false,
        items: [
          { text: '3月16日中午说明', link: '/qa/2026-03-16' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xihale/qg_intro' }
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    }
  }
})
