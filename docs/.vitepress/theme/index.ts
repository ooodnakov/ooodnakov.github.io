import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import RepoGrid from './components/RepoGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RepoGrid', RepoGrid)
  },
} satisfies Theme
