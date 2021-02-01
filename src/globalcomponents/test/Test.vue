<template>
  <div class="global-test-demo">
    <p>
      const testObj = Vue.extend(test);
      testObj.install = (Vue, option)=>{

        //可以使用prototype挂在全局方法  OK
        Vue.prototype.$test = function (option) {
          console.log(option);  // 全局任何地方调用都执行 逻辑...
        }
      }
    </p>
    <p>{{}}</p>
  </div>

</template>

<script>
  export default {
    name: 'Test',
    data(){
      return{
        fileName: '',
        exportId: '',
      }
    }
  }
</script>

<style scoped>

</style>
