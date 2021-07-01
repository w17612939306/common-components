<template>
  <div class="father-box">
    <!--兄弟组件之间数据传递 -父组件-->
    <div class="father-part">
      <button @click='handle'>销毁加油事件</button>
    </div>

    <div class="son-part">
      <acomponents :hub="hub" v-bind.sync="'WWWWWW'"></acomponents>
      <span></span>
      <bcomponents :hub="hub"></bcomponents>
    </div>

  </div>
</template>

<script>
import Acomponents from './Acomponents'
import Bcomponents from './Bcomponents'
import Vue from 'vue'
export default {
  name: 'ParentComponnents',
  components: {Bcomponents, Acomponents},
  data () {
    return {
      hub: new Vue() // 1、 提供事件中心
    }
  },
  mounted () {
    // console.log(this.hub)
  },
  methods: {
    handle: function () {
      // 4、销毁事件 通过hub.$off()方法名销毁之后无法进行传递数据
      this.hub.$off('acomponents')
      this.hub.$off('bcomponents')
    }
  }
}
</script>

<style lang="scss" scoped>
    .father-box{
      .father-part{
        padding: 15px;
        height: 20px;
        text-align: center;
        background: #ca9696;
      }
      .son-part{
        padding: 15px;
        background: #a8d4ca;
        display: flex;
        justify-content: space-around;
        span{
          display: inline-block;
          height: 50px;
          border-left: 2px solid black;
        }
      }
    }
</style>
