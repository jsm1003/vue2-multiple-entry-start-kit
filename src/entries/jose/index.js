import Vue from 'vue'
import App from './jose.vue'
//import store from './store'
import router from '~src/router/jose.js'

const app = new Vue({
    //store,
    router,
    ...App
})

app.$mount('#app')