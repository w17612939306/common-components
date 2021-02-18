<template>
    <div>
      <h2>作用域插槽获取组件内部数据</h2>
      <slot name="header" :firstName="firstName" :lastName="lastName"></slot>
      <el-button @click="changeLastName">换个名字</el-button>
    </div>
</template>

<script>
  export default {
    name: 'AreaSlot',
    data(){
      return{
        firstName: '欧阳',
        lastName: '骆玲',
      }
    },
    mounted(){
      this.lastName = '夏邦';
    },
    methods:{
      changeLastName(){
        if(this.lastName != '葫芦娃'){
          this.lastName = '葫芦娃';
        }else{
          this.lastName = '白骨精';
        }
      }
    }
  }
</script>

<style scoped>

</style>
