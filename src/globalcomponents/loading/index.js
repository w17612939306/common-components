import loading from './Loading'

// 1、可以使用component注册组件
loading.install = (Vue) => {
  Vue.component(loading.name, loading)
  // main.js
  // import Test from '@globalcomponents/loading/index'
  // Vue.use (Test);
}
export default loading

// 3、也可以使用Vue.mixin()把各种方法添加到当前vue组件方法里面，methods   不会用
//     Vue.mixin({
//       data() {
//         return {
//           msg: 'ssss',
//         }
//       },
//       methods: {
//         /* 添加各种方法，但是我建议放在test.vue里面比较方便 */
//         testInit(){
//           console.log('ERTTTT');
//         }
//       }
//     })
