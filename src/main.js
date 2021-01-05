// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/css/global-cover.scss"
import test from "@views/test/index"

Vue.config.productionTip = false
Vue.use (test);
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
