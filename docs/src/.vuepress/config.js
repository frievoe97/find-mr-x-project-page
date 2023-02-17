const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Find Mr. X',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    searchMaxSuggestions: 10,
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'German', link: '/language/de/' },
          { text: 'English', link: '/language/eng/' }
        ]
      }
/*       {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      } */
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: [
            // '',
            // 'using-vue',
            // 'guide-section',
            'description',
            'usage',
            'components',
            'tests',
            'future'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
