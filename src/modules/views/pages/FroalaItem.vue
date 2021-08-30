<template>
  <div>
    <h4>{{pageData}}</h4>
    <froala-editor ></froala-editor>
  </div>
</template>

<script>
    import FroalaEditor from "@components/froala-editor/FroalaEditor";
    export default {
      name: "FroalaItem",
      data(){
        return {
          pageData: '1、富文本编辑器',

        }
      },
      components: { FroalaEditor },
      mounted(){
        this.getData();
      },
      methods: {
        getData() {
          // commonApi.getData({name: 'wangmazi',pwd: '345688'}).then((res)=>{
          //   if(res && res.result){
          //     this.pageData = res.obj.data;
          //   }
          // })
        }
      }
    }
</script>

<style scoped>

</style>
