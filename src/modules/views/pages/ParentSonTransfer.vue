<template>
    <div>
      <h4>{{pageData}}</h4>
      <parent-componnents></parent-componnents>
    </div>
</template>

<script>
    import ParentComponnents from "@components/brother-send-datas/ParentComponnents";
    export default {
      name: "ParentSonTransfer",
      components: { ParentComponnents },
      data(){
        return {
          pageData: '6、兄弟组件之间数据传递-父组件：',
        }
      },
      mounted(){},
    }
</script>

<style scoped>

</style>
