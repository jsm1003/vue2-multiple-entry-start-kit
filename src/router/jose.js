import Vue from 'vue'
import VueRouter from 'vue-router'

import counter from '~pages/counter'
import poem from '~pages/poem'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',//这里可以不用history模式
    base: __dirname,
    routes:[
        {path: '/counter', component: counter},
        {path: '/poem', component: poem}
    ]
})
export default router