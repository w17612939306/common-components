import Hello from '../components/Hellow'
import World from '../components/World'
import BreadCrumb from '@components/BreadCrumb/Breadcrumb'

export default {
  install (Vue) {
    Vue.component('sayHello', Hello)
    Vue.component('sayWorld', World)
    Vue.component('breadCrumb', BreadCrumb)
  }
}
