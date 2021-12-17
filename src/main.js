import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { URL_API} from '@/configs/api'
import axios from 'axios'

axios.defaults.baseURL = URL_API

createApp(App).use(router).mount('#app')
