import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Miku",
  description: "Making Everything Easy",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'はじめに', link: '/docs/getting-started' },
      { text: 'サーバーに招待', link: '/invite' },
      { text: 'サポート', link: '/support' }
    ],

    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'はじめに', link: '/docs/getting-started' },
          { text: 'サーバーに招待', link: '/docs/getting-started#invite' }
        ]
      },
      {
        text: '機能',
        items: [
          { text: '機能一覧', link: '/docs/features' },
          { text: 'レベルシステム', link: '/docs/leveling' },
          { text: '経済システム', link: '/docs/economy' }
        ]
      },
      {
        text: 'コマンドリファレンス',
        collapsed: false,
        items: [
          { text: '概要', link: '/docs/commands/' },
          { text: '情報', link: '/docs/commands/info' },
          { text: '認証', link: '/docs/commands/auth' },
          { text: 'コンテキスト', link: '/docs/commands/context' },
          { text: 'カスタムロール', link: '/docs/commands/custom-role' },
          { text: '経済', link: '/docs/commands/economy' },
          { text: '管理', link: '/docs/commands/moderation' },
          { text: 'モジュール (/module)', link: '/docs/commands/module' },
          { text: '音楽', link: '/docs/commands/music' },
          { text: '読み上げ', link: '/docs/commands/reader' },
          { text: 'ユーティリティ', link: '/docs/commands/util' },
          { text: 'VC管理', link: '/docs/commands/vcmanager' },
          { text: '開発者向け', link: '/docs/commands/developer' }
        ]
      },
      {
        text: 'その他',
        items: [
          { text: 'サポート・お問い合わせ', link: '/docs/support' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/A2dYWKYtXe' }
    ]
  },
  markdown: {
    math: true
  },
  rewrites: {
    'source/:page': 'destination/:page'
  },
})
