<template>
  <div class="page-demo">
    <div class="page-content">
      <breadcrumb :breads="breadData.breads" :title="breadData.title">
      </breadcrumb>
      <div class="card-box">
          <p>撒地方大师傅</p>
          <p>撒地方大师傅</p>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@components/Breadcrumb'
export default {
  name: 'Index',
  components: { Breadcrumb },
  data(){
    return{
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
      }
    }
  },
  mounted(){
    // console.log(this.$test)
    // this.$test("QQQQQQQ"); //可以全局调用$test方法，入参'WWWWW'
    this.$testInit("QQQQQQQ"); //可以全局调用$test方法，入参'WWWWW'
  }
}
</script>

<style lang="scss" scoped>
  .page-demo{
    .card-box{
      background: #ffffff;
    }
  }
</style>
