import { createApp } from 'vue'
import App from './App.vue'

import router from './routes/routes'

const app = createApp(App)

app.use(router)

app.mount('#app')
