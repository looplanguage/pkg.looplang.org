import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as Vue from 'vue'
import {createApp} from "vue"

createApp(App).use(router).mount('#app')