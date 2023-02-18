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

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'de-DE', // this will be set as the lang attribute on <html>
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },

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
    lastUpdated: true,
//     nav: [
//       {
//         text: 'Documentation',
//         link: '/docs/',
//       },
//       {
//         text: 'Config',
//         link: '/config/'
//       }
// /*       {
//         text: 'VuePress',
//         link: 'https://v1.vuepress.vuejs.org'
//       } */
//     ],
    // sidebar: {
    //   '/docs/': [
    //     {
    //       title: 'Documentation',
    //       collapsable: false,
    //       children: [
    //         // '',
    //         // 'using-vue',
    //         // 'guide-section',
    //         'description',
    //         'usage',
    //         'components',
    //         'tests',
    //         'future'
    //       ]
    //     }
    //   ],
    // },
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Sprache',
        // label for this locale in the language dropdown
        label: 'Deutsch',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Documentation',
            link: '/docs/',
          },
          {
            text: 'Config',
            link: '/config/'
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
        },
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: 'Documentation',
            link: '/en/docs/',
          },
          {
            text: 'Config',
            link: '/en/docs/'
          }
    /*       {
            text: 'VuePress',
            link: 'https://v1.vuepress.vuejs.org'
          } */
        ],
        algolia: {},
        sidebar: {
          '/en/docs/': [
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
        },
      }
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
