<template>
    <div>
      <slot name="header" :firstName="firstName" :lastName="lastName"></slot>
      <el-button @click="changeLastName">换个名字</el-button>
    </div>
</template>

<script>
export default {
  name: 'AreaSlot',
  data () {
    return {
      firstName: '欧阳',
      lastName: '骆玲'
    }
  },
  mounted () {
    this.lastName = '夏邦'
  },
  methods: {
    changeLastName () {
      if (this.lastName != '葫芦娃') {
        this.lastName = '葫芦娃'
      } else {
        this.lastName = '白骨精'
      }
    }
  }
}
</script>

<style scoped>

</style>
