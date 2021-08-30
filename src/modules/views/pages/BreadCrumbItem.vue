<template>
    <div>
      <h4>{{pageData}}</h4>
      <breadcrumb :breads="breadData.breads" :title="breadData.title"></breadcrumb>
    </div>
</template>

<script>
import Breadcrumb from "@components/bread-crumb/Breadcrumb";
export default {
  name: 'World',
  components: { Breadcrumb },
  data(){
    return {
      pageData: '2、面包屑',
      breadData: {
        breads: [
          {
            title: '列表页',
            path: ''
          },
          {
            title: '详情页3',
            path: '/'
          }
        ],
        title: '详情页31'
      },
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
