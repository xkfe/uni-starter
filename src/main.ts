import { createSSRApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/index.scss'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
