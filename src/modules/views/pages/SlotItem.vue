<template>
    <div>
      <h4>{{pageData}}</h4>
      <!--具名插槽 start -->
      <div class="card-box">
        <!--老版本使用具名插槽-->
        <span>具名插槽(老)：</span>
        <use-new-slot>
          <p slot="header">具名插槽-我是组件头部</p>
        </use-new-slot>
        <hr>

        <!--新版本使用具名插槽-->
        <span>具名插槽(新)：</span>
        <use-new-slot>
          <template v-slot:header>
            <p>我也是组件头部1</p>
          </template>
          <!--新版本将 v-slot: 替换成 # 号-->
          <template #header2>
            <p>我也是组件头部2</p>
          </template>
        </use-new-slot>
        <!--具名插槽 end -->
        <hr>
        <!--作用域插槽 start-->

        <!--作用域插槽：就是让插槽的内容能够访问子组件中才有的数据。-->
        <h5>作用域插槽: 获取组件内部数据</h5>
        <AreaSlot>
          <p slot="header" slot-scope="WW">姓名是：{{WW.firstName}}{{WW.lastName}}</p>
        </AreaSlot>
      </div>
      <!--作用域插槽 end-->
    </div>
</template>

<script>
    import UseNewSlot from "@components/bread-crumb/UseNewSlot";
    import AreaSlot from "@components/bread-crumb/AreaSlot";
    export default {
      name: "SlotItem",
      components: {AreaSlot, UseNewSlot},
      data(){
        return {
          pageData: '7、兄弟组件之间数据传递-父组件：',
        }
      },
      mounted(){},
    }
</script>

<style scoped>

</style>
