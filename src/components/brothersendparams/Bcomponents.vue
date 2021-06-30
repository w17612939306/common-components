<template>
  <div class="jerry-part">
    <div class="title">JERRY:{{num}}</div>
    <div>
      <button @click='handle'>点击给TOM加油</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bcomponents',
    data(){
      return{
        num: 0
      }
    },
    props:['hub'],
    mounted(){
      // 3、接收数据方，通过mounted(){} 钩子中  触发hub.$on()方法名
      this.hub.$on('bcomponents', (val) => {
        this.num += val;
      });
    },
    methods:{
      handle: function(){
        //2、传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)   触发兄弟组件的事件
        this.hub.$emit('acomponents', 1);
      }
    }

  }
</script>

<style lang="scss" scoped>
  .jerry-part{
    .title{
      margin-bottom: 10px;
    }
  }
</style>
