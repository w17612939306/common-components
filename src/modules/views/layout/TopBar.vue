<template>
  <div class="top-bar-box">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!--disabled-->
      <el-menu-item index="3" >消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
      name: "TopBar",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      mounted(){
        this.$root.eventHub.$on('RESET_PARAMS', (data)=>{//监听事件 $eventBus
          console.log('接受到的参数：'+ data);
        } )
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .top-bar-box{
    width: 100%;
    height: 50px;
    background: #09D8CE;
  }
</style>
