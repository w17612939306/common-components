<template>
  <div id="app">
    <!--兄弟组件之间数据传递-->
    <div>兄弟组件之间数据传递-父组件</div>
    <div>
      <button @click='handle'>销毁事件</button>
    </div>

    <acomponents :hub="hub"></acomponents>
    <bcomponents :hub="hub"></bcomponents>
  </div>
</template>

<script>
  import Acomponents from './Acomponents'
  import Bcomponents from './Bcomponents'
  import Vue from 'vue'
  export default {
    name: 'ParentComponnents',
    components: {Bcomponents, Acomponents},
    data(){
      return{
        hub: new Vue()  //1、 提供事件中心
      }
    },
    mounted(){
      console.log(this.hub)
    },
    methods: {
      handle: function(){
        //4、销毁事件 通过hub.$off()方法名销毁之后无法进行传递数据
        this.hub.$off('acomponents');
        this.hub.$off('bcomponents');
      }
    }
  }
</script>

<style scoped>

</style>
