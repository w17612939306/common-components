<template>
  <transition name="alert-fade">
    <div v-show="visible" class="Alert">
      <i v-show="closable" class="iconhandle close" @click="close">&#xe609;</i>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Alert', // 组件的名字
    props: {  // 属性
      closable: {
        type: Boolean,
        default: true
      },
      show: {
        type: Boolean,
        default: true,
        twoWay: true
      },
      type: {
        type: String,
        default: 'info'
      }
    },
    data() {
      return {
        visible: this.show
      };
    },
    methods: {
      close() {  //点击关闭 向外暴露2个事件
        this.visible = false;
        this.$emit('update:show', false);
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>

</style>
