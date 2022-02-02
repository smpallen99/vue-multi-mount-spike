import { createApp } from 'vue'
import App1 from './packages/main/App.vue'
import App2 from './packages/side-bar/App.vue'

createApp(App1).mount('#app')
createApp(App2).mount('#side-bar')
