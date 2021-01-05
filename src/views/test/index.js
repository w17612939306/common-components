import Vue from 'vue';
import test from "./Test";

const testObj = Vue.extend(test);

testObj.install = (option)=>{
    //可以使用component注册组件   有问题 不会用
    // Vue.component('Test', option)

  //可以使用prototype挂在全局方法  OK
    Vue.prototype.$test = function (option) {
      console.log(option);  // 全局任何地方调用都执行 逻辑...
    }

//也可以使用Vue.mixin()把各种方法添加到当前vue组件方法里面，methods   不会用
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

}

//使用就可以在main.js使用 vue.use (test)


export default testObj;

