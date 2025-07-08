import { createApp } from 'vue'
import App from './App.vue'

import i18n from './i18n'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
createApp(App).use(i18n).mount('#app')
