// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/css/global-cover.scss"
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/iconfont/iconfont.css'


//Import Froala Editor
import 'froala-editor/js/plugins.pkgd.min.js';
//Import third party plugins
import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
// Import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)
Vue.config.productionTip = false



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
