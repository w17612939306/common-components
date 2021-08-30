<template>
    <div>
      <h4>{{pageData}}</h4>
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
</template>

<script>
    import DialogBox from "@components/dialog/DialogBox";
    export default {
      name: "GlobalDialog",
      components: { DialogBox },
      data(){
        return {
          pageData: '5、弹框组件',
          showDialogs: false,
          dialogData: '',
        }
      },
      methods: {
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
