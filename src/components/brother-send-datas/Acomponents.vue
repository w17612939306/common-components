<template>
    <div class="tom-part">
      <div class="title">TOM:{{num}}</div>
      <div>
        <button @click='handle'>点击给JERRY加油</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Acomponents',
  data () {
    return {
      num: 0
    }
  },
  props: ['data', 'hub'],
  mounted () {
    console.log(this.data)
    // 3、接收数据方，通过mounted(){} 钩子中  触发hub.$on()方法名
    this.hub.$on('acomponents', (val) => {
      this.num += val
    })
  },
  methods: {
    handle () {
      // 2、传递数据方，通过一个事件触发hub.$emit(方法名，传递的数据)   触发兄弟组件的事件
      this.hub.$emit('bcomponents', 2)
    }
  }
}
</script>

<style lang="scss" scoped>
    .tom-part{
      .title{
        margin-bottom: 10px;
      }
    }
</style>
