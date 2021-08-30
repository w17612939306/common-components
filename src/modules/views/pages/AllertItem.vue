<template>
    <div>
      <h4>{{pageData}}</h4>
      <el-button @click="showAlert">打开alert</el-button>
    </div>
</template>

<script>
    export default {
      name: "AllertItem",
      data(){
        return {
          pageData: '4、全局alert'
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
      }
    }
</script>

<style scoped>

</style>
