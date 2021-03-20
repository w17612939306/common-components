<template>
  <div class="page-demo">
    <div class="page-content">
      <!--面包屑 start-->
      <breadcrumb :breads="breadData.breads" :title="breadData.title">
      </breadcrumb>
      <!--面包屑 end-->

      <!--loading 组件 start-->
      <div class="card-box">
        <loading  :pageLoading="loadingData">测试Loading组件</loading>
      </div>
      <!--loading 组件 end-->

      <!--alert组件  start-->
      <div class="card-box">
        <el-button @click="showAlert">打开alert</el-button>
      </div>
      <!--alert组件  end-->

      <!--具名插槽 start -->
      <div class="card-box">
        <!--老版本使用具名插槽-->
        <use-new-slot>
          <p slot="header">我是组件头部</p>
        </use-new-slot>
        <span>*************************</span>
        <!--新版本使用具名插槽-->
        <use-new-slot>
          <template v-slot:header>
            <p>我也是组件头部</p>
          </template>
          <!--将 v-slot: 替换成 # 号-->
          <template #header>
            <p>我也是组件头部</p>
          </template>
        </use-new-slot>
      </div >
      <!--具名插槽 end -->

      <div class="card-box">
        <!--作用域插槽：就是让插槽的内容能够访问子组件中才有的数据。-->
        <!--作用域插槽 start-->
        <AreaSlot>
          <p slot="header" slot-scope="WW">姓名是：{{WW.firstName}}{{WW.lastName}}</p>
        </AreaSlot>
        <!--作用域插槽 end-->
      </div>

      <div class="card-box">
        <parent-componnents></parent-componnents>
      </div>

      <div class="card-box">
        <button class="btn" style="width:100px;height:50px">cl</button>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@components/breadcrumb/Breadcrumb'
import Loading from '../../globalcomponents/loading/Loading'
import UseNewSlot from '../../components/breadcrumb/UseNewSlot'
import AreaSlot from '../../components/breadcrumb/AreaSlot'
import ParentComponnents from '../../components/brothersendparams/ParentComponnents'
export default {
  name: 'Index',
  components: {ParentComponnents, AreaSlot, UseNewSlot, Loading, Breadcrumb },
  data(){
    return{
      active: true,
      breadData:{
        breads:[
          {
            title: '列表页',
            path: ''
          },
          {
            title: '详情页3',
            path: '/hello-world'
          }
        ],
        title: '详情页31',
      },
      loadingData: false,
    }
  },
  mounted(){
    this.loadingData = true;
    this.getData();
    const vnode = {
      type: 'button',
      props: {
        'class': 'btn',
        style: {
          width: '100px',
          height: '50px'
        }
      },
      children: 'click me'
    }
  },
  methods:{
    // 打开弹框  组件可全局使用
    showAlert(){
      const MyMessageBox = this.$my_alert({
        type: "warning",
        content: `确定要启用当前状态吗？`,
        opeBtn: [
          {
            text: "取消",
            fn: () => {
              MyMessageBox.visible = false;
            }
          },
          {
            type: "primary",
            text: "确认",
            fn: () => {
              MyMessageBox.visible = false;
              this.$message.success("启用成功");
            }
          }
        ]
      });
    },

    getData(){
      let data = ['A','B'];
      if(data){
        setTimeout(()=>{
          // 获取到数据后关闭 未获取到数据 一直loading
          this.loadingData = false;
        },2000);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-demo{
    .page-content{
      .card-box{
        background: #ffffff;
        padding: 20px;
        margin: 15px 0;
      }
    }
  }
</style>
