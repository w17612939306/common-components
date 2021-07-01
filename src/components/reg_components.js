import Hello from './Hellow'
import World from './World'
import BreadCrumb from '@components/breadcrumb/Breadcrumb'

export default {
  install (Vue) {
    Vue.component('sayHello', Hello)
    Vue.component('sayWorld', World)
    Vue.component('breadCrumb', BreadCrumb)
  }
}
