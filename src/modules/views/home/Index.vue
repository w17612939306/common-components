<template>
  <div class="page-demo">
    <div class="page-content">
      <Hellow></Hellow>
      <World></World>
      <div class="card-box">
        <span>富文本编辑器：</span>
        <froala-editor></froala-editor>
      </div>

      <!--面包屑 start-->
      <div class="card-box">
        <span>面包屑：</span>
        <breadcrumb :breads="breadData.breads" :title="breadData.title">
        </breadcrumb>
      </div>
      <!--面包屑 end-->

      <!--左侧菜单待补充  start-->
      <div class="card-box">
        <span>菜单待补充:</span>
        <p>菜单待补充.................</p>
      </div>
      <!--左侧菜单待补充  end-->

      <!--loading 组件 start-->
      <div class="card-box">
        <span>loading 组件：</span>
        <loading  :pageLoading="loadingData">测试Loading组件</loading>
      </div>
      <!--loading 组件 end-->

      <!--alert组件  start-->
      <div class="card-box">
        <span>按钮 + alert组件：</span>
        <el-button @click="showAlert">打开alert</el-button>
      </div>
      <!--alert组件  end-->

      <!--具名插槽 start -->
      <div class="card-box">
        <!--老版本使用具名插槽-->
        <span>具名插槽(老)：</span>
        <use-new-slot>
          <p slot="header">具名插槽-我是组件头部</p>
        </use-new-slot>
        <hr>
        <!--新版本使用具名插槽-->
        <use-new-slot>
          <span>具名插槽(新)：</span>
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

      <!--作用域插槽 start-->
      <div class="card-box">
        <!--作用域插槽：就是让插槽的内容能够访问子组件中才有的数据。-->
        <span>作用域插槽：</span>
        <AreaSlot>
          <p slot="header" slot-scope="WW">姓名是：{{WW.firstName}}{{WW.lastName}}</p>
        </AreaSlot>
      </div>
      <!--作用域插槽 end-->

      <!--兄弟组件之间数据传递 start-->
      <div class="card-box">
        <span>兄弟组件之间数据传递-父组件：</span>
        <parent-componnents></parent-componnents>
      </div>
      <!--兄弟组件之间数据传递 end-->

      <!--弹框组件 start-->
      <div class="card-box">
        <span>弹框组件：</span>
        <el-button @click="openDialog">打开弹框</el-button>
          <dialog-box
            v-if="showDialogs"
            :data="dialogData"
            :dialogVisible="true"
            title="弹框标题"
            content="确认要重启吗？"
            :buttons="opeBtns"
            @close-event="closeDialog" >
            <template v-slot:content>
              <span>我也是组件头部</span>
            </template>
          </dialog-box>

      </div>
      <!--弹框组件 end-->
    </div>
  </div>
</template>

<script>
import { aData, aMethond, Person, B } from '@components/Modules_es6/c'
import { A, dMethod, dPerson } from '@components/Modules_es6/d'
import Breadcrumb from '@components/BreadCrumb/Breadcrumb'
import Loading from '@globalcomponents/loading/Loading'
import UseNewSlot from '@components/BreadCrumb/UseNewSlot'
import AreaSlot from '@components/BreadCrumb/AreaSlot'
import ParentComponnents from '@components/BrotherSendParams/ParentComponnents'
import DialogBox from '@components/Dialog/DialogBox'
import FroalaEditor from '@components/FroalaEditor/FroalaEditor'
import Hellow from '../../../components/Hellow'
import World from '../../../components/World'
export default {
  name: 'Index',
  components: {World, Hellow, FroalaEditor, DialogBox, ParentComponnents, AreaSlot, UseNewSlot, Loading, Breadcrumb },
  data () {
    return {
      aData: '',
      bData: '',
      active: true,
      breadData: {
        breads: [
          {
            title: '列表页',
            path: ''
          },
          {
            title: '详情页3',
            path: '/hello-world'
          }
        ],
        title: '详情页31'
      },
      loadingData: false,
      showDialogs: false,
      dialogData: '',
      opeBtns: [
        {
          label: '取消',
          event: () => {
            return this.showDialogs = false
          }
        },
        {
          label: '确定',
          type: 'primary'
        }
      ]
    }
  },
  mounted () {
    console.log(A);
    this.aData = A || '';
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
  methods: {
    // 打开弹框  组件可全局使用
    showAlert () {
      const MyMessageBox = this.$my_alert({
        type: 'warning',
        content: `确定要启用当前状态吗？`,
        opeBtn: [
          {
            text: '取消',
            fn: () => {
              MyMessageBox.visible = false
            }
          },
          {
            type: 'primary',
            text: '确认',
            fn: () => {
              MyMessageBox.visible = false
              this.$message.success('启用成功')
            }
          }
        ]
      })
    },

    getData () {
      let data = ['A', 'B']
      if (data) {
        setTimeout(() => {
          // 获取到数据后关闭 未获取到数据 一直loading
          this.loadingData = false
        }, 2000)
      }
    },

    openDialog () {
      this.showDialogs = true
    },
    closeDialog (val) {
      console.log(val)
      this.showDialogs = false
      if (val && val == 'primary') {
        // todo  调用接口 成功后关闭
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
        >span{
          color: darkorange;
        }
      }
    }
  }
</style>
