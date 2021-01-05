<template>
    <div class="bread-crumb-box">
      <span class="bolder-title">{{title}}</span>
      <div class="bread-crumb" v-for="(item,i) of breads">
        <span @click="linkPage(item)" :class="item.path?'hand-point':''">{{item.title}}</span>
        <span><span v-if="i < breads.length - 1">/</span></span>
      </div>
      <div class="right">
        <slot name="action"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breads: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ()=> ''
    }
  },
  created(){
    // console.log(this.bread)
  },
  methods:{
    linkPage(val){
      if (val.path){
        this.$router.push({path: val.path, query: val.query});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bread-crumb-box{
    background: #ffffff;
    text-align: left;
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    .bolder-title{
      font-size: 16px;
      font-weight: bolder;
      margin-right: 20px;
    }
    .bread-crumb{
      display: inline;
      .hand-point{
        cursor: pointer;
      }
    }
  }
</style>
