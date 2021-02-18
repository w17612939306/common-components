<template>
    <div>
      <div>TOM:{{num}}</div>
      <div>
        <button @click='handle'>点击</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Acomponents',
    data(){
      return {
        num: 0
      }
    },
    props:['hub'],
    mounted(){
      console.log(this.hub)
      // 3、接收数据方，通过mounted(){} 钩子中  触发hub.$on()方法名
      this.hub.$on('acomponents', (val) => {
        this.num += val;
      });
    },
    methods: {
      handle(){
        //2、传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)   触发兄弟组件的事件
        this.hub.$emit('bcomponents', 2);
      }
    }
  }
</script>

<style scoped>

</style>
