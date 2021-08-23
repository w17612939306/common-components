import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/modules/views/home/Index'
import hello from '@/modules/views/vuepage/Hellow'
import fEditor from '@/modules/views/pages/Froala'


Vue.use(Router)

const router = new Router({
  mode:'history',
  base:'sdfsefes.env.BASE_URL',
  routes:[
    {
      path: '/',
      component: homePage,
      children: [
        {
          path: '/bread',
          component: hello
        },
        {
          path: '/fEditor',
          component: fEditor
        },
      ]
    },
  ]
})
export default router
