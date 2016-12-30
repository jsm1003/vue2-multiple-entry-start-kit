import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '~pages/home'
import topic from '~pages/topic'

//后续会实现路由懒加载、滚动行为、过渡特效，
//再往后会考虑路由别名，比如 /u的别名为/user
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'h', component: home},
    { path: '/home', name: 'home', component: home},
    { path: '/topic', name: 'topic', component: topic}
  ]
})

export default router
