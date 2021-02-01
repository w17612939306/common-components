import Vue from 'vue';
import test from "./Test";

const testObj = Vue.extend(test);

testObj.install = (Vue, options)=>{
    //1、可以使用component注册组件
    // Vue.component('Test', option)
    if (!options) {
      return null;
    }
    if(!options.fileName){
      Vue.prototype.$message.error('必传参数:文件名不能为空');
      return null;
    }
    if(!options.exportId){
      Vue.prototype.$message.error('必传参数:exportId不能为空');
      return null;
    }
    //2、可以使用prototype挂在全局方法  OK
    Vue.prototype.$test = function (option) {
      console.log('$test  方法被调用');  // 全局任何地方调用都执行 逻辑...
      // 使用就可以在main.js使用 vue.use (test)
    }

    if(document.querySelector('.global-test-demo')){
      return null;
    }
    const instance = new testObj({
      data: options
    }).$mount();

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
    testObj.instance = instance;
    return instance;

    //3、也可以使用Vue.mixin()把各种方法添加到当前vue组件方法里面，methods   不会用
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

export default testObj;

