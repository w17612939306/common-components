<template>
  <!--富文本编辑器 start-->
  <div class="card-box">
    <!--<froala-editor></froala-editor>-->
  </div>
  <!--富文本编辑器 end-->

  <!--面包屑 start-->
  <div class="card-box">
    <breadcrumb :breads="breadData.breads" :title="breadData.title"></breadcrumb>
  </div>
  <!--面包屑 end-->

  <!--loading 组件 start-->
  <div class="card-box">
    <loading :pageLoading="loadingData"></loading>
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
</template>

<script>

    export default {
      name: "CommonPages",
      components: {Breadcrumb},
      data () {
        return {
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
          loadingData: true,
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

<style scoped>

</style>
