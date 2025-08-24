import '@/assets/styles/fonts.scss'
import '@/assets/styles/reset.scss'
import '@/assets/styles/animations.scss'

import { createApp } from 'vue'
import VWave from 'v-wave'
import App from './App.vue'

createApp(App).use(VWave).mount('#app')
