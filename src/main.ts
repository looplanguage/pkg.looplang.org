import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {createApp} from "vue"
import * as dotenv from "dotenv"
dotenv.config()

createApp(App).use(router).mount('#app')