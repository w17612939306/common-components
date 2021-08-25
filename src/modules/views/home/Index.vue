<template>
  <div class="component-page-box">
    <top-bar></top-bar>
    <div class="body-content" style="width: 100%;display: flex;">
      <side-bar></side-bar>
      <div class="page-content" >
        <!--嵌套路由-->
        <div class="card-box">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { aData, aMethond, Person, B } from '@components/Modules_es6/c'
import { A, dMethod, dPerson } from '@components/Modules_es6/d'

import SideBar from "../layout/SideBar";
import TopBar from "../layout/TopBar";
export default {
  name: 'Index',
  components: {
    TopBar,
    SideBar },
  data () {
    return {
      aData: '',
      bData: '',
      active: true,

      opeBtns: [
        {
          label: '取消',
          event: () => {
            return this.showDialogs = false
          }
        },
        {
          label: '确定',
          type: 'primary'
        }
      ]
    }
  },
  mounted () {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .component-page-box{
    .body-content{
      .page-content{
        width: 100%;
        .card-box{
          background: #ffffff;
          padding: 20px;
          margin: 0;
          >span{
            color: darkorange;
          }
        }
      }
    }

  }
</style>
