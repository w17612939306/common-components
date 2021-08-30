import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/modules/views/home/Index'

import fEditor from '@/modules/views/pages/FroalaItem'
import breadCrumb from '@/modules/views/pages/BreadCrumbItem'
import loading from '@/modules/views/pages/LoadingItem'
import alert from '@/modules/views/pages/AllertItem'
import dialog from '@/modules/views/pages/GlobalDialog'
import parentComponent from '@/modules/views/pages/ParentSonTransfer'
import slotUse from '@/modules/views/pages/SlotItem'


Vue.use(Router);

// 解决重复点击路由报错的BUG
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
};


const router = new Router({
  mode:'history',
  routes:[
    {
      path: '/',
      component: homePage,
      redirect: 'fEditor', //跳转到下级第一层
      children: [
        {
          path: 'fEditor',
          component: fEditor
        },
        {
          path: 'breadCrumb',
          component: breadCrumb
        },
        {
          path: 'loading',
          component: loading
        },
        {
          path: 'alert',
          component: alert
        },
        {
          path: 'dialog',
          component: dialog
        },
        {
          path: 'parentPage',
          component: parentComponent
        },
        {
          path: 'slot',
          component: slotUse
        },
      ]
    },
  ]
})
export default router
