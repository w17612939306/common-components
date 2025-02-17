// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/global-cover.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import installObj from '@/common/reg_components'
// import '@/assets/iconfont/iconfont.css'

// Import Froala Editor
import 'froala-editor/js/plugins.pkgd.min.js'
// Import third party plugins
import 'froala-editor/js/third_party/embedly.min'
import 'froala-editor/js/third_party/font_awesome.min'
import 'froala-editor/js/third_party/spell_checker.min'
import 'froala-editor/js/third_party/image_tui.min'
// Import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css'

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'

// 方法一：使用component注册全局组件
import loading from '@globalcomponents/loading/index'

// 方法二 使用prototype注册全局组件  用到引用
import alertBox from '@globalcomponents/alert/index'
Vue.use(VueFroala)
Vue.config.productionTip = false
Vue.use(loading)
Vue.use(ElementUI)
Vue.use(installObj)
Vue.prototype.$my_alert = alertBox.install

Vue.config.productionTip = false


//兄弟之前的传值
Vue.prototype.$EventHub = Vue.prototype.$EventHub || new Vue();


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')
