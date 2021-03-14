import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

// bootstrap 적용
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mixin(mixins).use(router).mount('#app')
