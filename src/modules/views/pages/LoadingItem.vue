<template>
  <div>
    <h4>{{pageData}}</h4>
    <loading :pageLoading="loadingData"></loading>
  </div>
</template>

<script>
    export default {
      name: "LoadingItem",
      data(){
        return {
          pageData: '3、Loading 组件',
          loadingData: true,
        }
      },
      mounted(){
        this.getData();
      },
      methods:{
        getData() {
          let data = ['A', 'B']
          if (data) {
            setTimeout(() => {
              // 获取到数据后关闭 未获取到数据 一直loading
              this.loadingData = false
            }, 2000)
          }
        },
      }
    }
</script>

<style scoped>

</style>
