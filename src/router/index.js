import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/modules/pages/vuepage/HelloWorld'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

export default router
