import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  cleanUrls: true,
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'script',
      { id: 'check-color-theme' },
      "(()=>{try{const t=localStorage.getItem('ooodnakov-docs-theme');if(t&&/^(solarized|gruvbox|catppuccin|nord|tokyo-night|dracula|rose-pine)$/.test(t))document.documentElement.setAttribute('data-theme',t)}catch{}})()",
    ],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ooodnakov',

    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Показать подробности',
                resetButtonTitle: 'Сбросить запрос',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Ничего не найдено по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'вверх',
                  navigateDownKeyAriaLabel: 'вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'закрыть',
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ooodnakov' },
    ],

    footer: {
      message: 'Hosted on GitHub Pages with VitePress.',
      copyright: '© Aleksandr Odnakov (@ooodnakov)',
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'ooodnakov — Docs & Tools',
      description: 'Documentation hub and open-source project directory for @ooodnakov.',
      themeConfig: {
        nav: [
          { text: 'Projects', link: '/projects' },
          { text: 'About', link: '/about' },
          { text: 'dnakov.ooo', link: 'https://dnakov.ooo' },
        ],
        sidebar: [
          {
            text: 'Hub',
            items: [
              { text: 'Home', link: '/' },
              { text: 'Projects & Docs', link: '/projects' },
              { text: 'About', link: '/about' },
            ],
          },
          {
            text: 'Hosted Docs',
            items: [
              { text: 'VoiceDrop', link: 'https://ooodnakov.github.io/voice-drop/' },
              { text: 'windowping', link: 'https://ooodnakov.github.io/windowping/' },
              { text: 'zsh-fzf-unified', link: 'https://ooodnakov.github.io/zsh-fzf-unified/' },
              { text: 'ooodnakov-config', link: 'https://ooodnakov.github.io/ooodnakov-config/' },
            ],
          },
        ],
      },
    },

    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'ooodnakov — Доки и проекты',
      description: 'Хаб документации и открытых проектов @ooodnakov.',
      themeConfig: {
        nav: [
          { text: 'Проекты', link: '/ru/projects' },
          { text: 'О себе', link: '/ru/about' },
          { text: 'dnakov.ooo', link: 'https://dnakov.ooo' },
        ],
        sidebar: [
          {
            text: 'Хаб',
            items: [
              { text: 'Главная', link: '/ru/' },
              { text: 'Проекты и доки', link: '/ru/projects' },
              { text: 'О себе', link: '/ru/about' },
            ],
          },
          {
            text: 'Документация проектов',
            items: [
              { text: 'VoiceDrop', link: 'https://ooodnakov.github.io/voice-drop/ru/' },
              { text: 'windowping', link: 'https://ooodnakov.github.io/windowping/' },
              { text: 'zsh-fzf-unified', link: 'https://ooodnakov.github.io/zsh-fzf-unified/' },
              { text: 'ooodnakov-config', link: 'https://ooodnakov.github.io/ooodnakov-config/' },
            ],
          },
        ],
        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница',
        },
        outline: {
          label: 'На этой странице',
        },
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        langMenuLabel: 'Язык',
      },
    },
  },
})
