<template>
    <div class="dialog-box">
      <!--实现思路： 弹窗始终打开，在父页面通过变量控制弹窗隐藏和现实-->
      <el-dialog
        v-bind="$attrs"
        width="300px"
        title="标题"
        :close-on-click-modal="false"
        :visible.sync="dialogVisible"
        @close="closeEvent()"
      >
        <slot name="title"></slot>
        <slot name="content"></slot>
        <div slot="footer" class="dialog-footer">
          <el-button @click="changeShow">取 消</el-button>
          <el-button type="primary" @click="changeShow">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'DialogBox',
  props: {
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    buttons: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      dialogVisible: true,
      btnsVal: []
    }
  },
  mounted () {
    this.dialogVisible = true
    this.btnsVal = this.buttons
  },
  methods: {
    closeEvent () {
      this.dialogVisible = false
      // this.$emit('close-event')
    },
    changeShow (val) {
      // this.$parent.showDialogs = false;
      this.dialogVisible = true
      this.$emit('close-event', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog-box{

  }
</style>
