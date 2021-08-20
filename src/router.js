import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@components/Hellow'



Vue.use(Router)

const router = new Router({
  mode:'history',
  base:'',
  routes:[
    {
      path: '/',
      name: '',
      component: homePage,
    }
  ]
})
export default router
