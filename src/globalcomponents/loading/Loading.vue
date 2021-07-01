<template>
  <div class="global-test-demo">
    <div class="card" v-loading="loading">
      <div>Loading全局组件</div>
      <slot/> <!-- 插槽 -->
    </div>
  </div>

</template>

<script>
export default {
  name: 'Loading',
  props: ['pageLoading'],
  data () {
    return {
      fileName: '',
      exportId: '',
      loading: false
    }
  },
  watch: {
    pageLoading (newVal, oldVal) {
      // console.log(newVal);
      this.loading = newVal
    }
  },
  mounted () {
    // console.log(this.pageLoading);
    if (this.pageLoading) {
      this.loading = this.pageLoading
    }
  }
}
</script>

<style lang="scss">
  /*.global-test-demo .card{*/
    /*background: #ffffff;*/
    /*padding: 20px;*/
    /*margin: 15px 0;*/
  /*}*/
</style>
