import Vue from 'vue'
import App from './phine.vue'
//import store from './store'
import router from '~src/router/phine'

const app = new Vue({
   // store,
    router,
    ...App
})

app.$mount('#app')