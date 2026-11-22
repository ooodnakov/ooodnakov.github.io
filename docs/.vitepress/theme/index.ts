import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HubDirectoryDeck from './components/HubDirectoryDeck.vue'
import RepoGrid from './components/RepoGrid.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import './custom.css'
import './themes.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HubDirectoryDeck),
      'nav-bar-content-after': () => h(ThemeSwitcher, { variant: 'nav' }),
      'nav-screen-content-after': () => h(ThemeSwitcher, { variant: 'screen' }),
    })
  },
  enhanceApp({ app }) {
    app.component('RepoGrid', RepoGrid)
  },
} satisfies Theme
