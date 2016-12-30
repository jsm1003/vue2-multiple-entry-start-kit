import Vue from 'vue'
import VueRouter from 'vue-router'

import model from '~pages/model'
import show from '~pages/show'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',//这里可以不用history模式
    base: __dirname,
    routes:[
        //用户登陆页
        {path: '/model', component: model},
        //用户注册页
        {path: '/show', component: show}
    ]
})
export default router