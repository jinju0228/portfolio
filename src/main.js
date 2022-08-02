import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '/public/css/reset.css'
import '/public/css/common.css'
import '/public/css/about.css'
import '/public/css/webclone.css'
import '/public/css/project.css'
import '/public/css/contact.css'
import '/public/js/common.js'
const app = createApp(App)
app.use(router)
app.mount('#app')

