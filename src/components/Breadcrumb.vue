<template>
    <div class="bread-crumb-box">
      <div class="bread-crumb" v-for="(item,i) of crumbData">
        <span @click="linkPage(item)" :class="item.path?'hand-point':''">{{item.tittle}}</span>
        <span><span v-if="i < crumbData.length - 1">/</span></span>
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
    crumbData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  created(){
    console.log(this.crumbData)
  },
  methods:{
    linkPage(val){
      this.$router.push({path: val.path, query: val.query});
    }
  }
}
</script>

<style lang="scss" scoped>
  .bread-crumb-box{
    .bread-crumb{
      display: inline;
      .hand-point{
        cursor: pointer;
      }
    }
  }
</style>
