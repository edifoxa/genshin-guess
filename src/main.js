import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

createApp(App).use(router).component('v-select', VueSelect).mount('#app')
