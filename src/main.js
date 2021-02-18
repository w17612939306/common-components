// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/css/global-cover.scss"
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

// 方法一：使用component注册全局组件
import loading from '@globalcomponents/loading/index'
Vue.use (loading);
Vue.use (Element);

//方法二 使用prototype注册全局组件  用到引用
import alertBox from '@globalcomponents/alert/index'
Vue.prototype.$my_alert = alertBox.install;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
