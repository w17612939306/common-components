import Hello from '@/modules/views/vuepage/Hellow'
import World from '@/modules/views/vuepage/World'
import BreadCrumb from '@components/BreadCrumb/Breadcrumb'

export default {
  install (Vue) {
    Vue.component('sayHello', Hello);
    Vue.component('sayWorld', World);
    Vue.component('breadCrumb', BreadCrumb)
  }
}
