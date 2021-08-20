<template>
  <div>{{pageData}}</div>
</template>

<script>
  import { commonApi } from '@/service'  //正确，因为service.js中有命名为commonApi的export
export default {
  name: 'Hellow',
  data () {
    return {
      title: '',
      pageData: 'Hellow Page33',
    }
  },
  mounted(){
    this.getData();
  },
  methods: {
    getData() {
      commonApi.getData({name: 'wangmazi',pwd: '345688'}).then((res)=>{
        if(res && res.result){
          this.pageData = res.obj.data;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
