import Vue from 'vue'
import App from './App.vue'
import store from '../../store'
import router from '~src/router/app'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
