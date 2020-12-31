<template>
  <div>
    <p>表格页面</p>
    <breadcrumb :crumbData="breadData" >

    </breadcrumb>
  </div>
</template>

<script>
import Breadcrumb from '@components/Breadcrumb'
export default {
  name: 'Index',
  components: { Breadcrumb },
  data(){
    return{
      breadData:[
        {
          tittle: '列表页',
          path: ''
        },
        {
          tittle: '详情页3',
          path: '/hello-world'
        },
        {
          tittle: '详情页31',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
