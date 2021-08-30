<template>
  <div class="side-bar-box">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <template v-for="(item,i) in muneDatas">
        <el-submenu
          v-if="item.children && item.children.length"
          :index="''+ i"
          :key="i">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group>
            <template
              v-for="(child,c) in item.children"
            >
              <el-submenu
                v-if="child.children && child.children.length > 0"
                :index="'/' + c"
                :key="'/' + c">
                <template slot="title">{{child.label}}</template>
                <template v-for="(sonMenu,s) in child.children">
                  <el-menu-item
                    :index="'/' + s"
                    :key="'/' + s"
                    @click="jumpRouter('/' + sonMenu.name)"
                  >{{sonMenu.label}}</el-menu-item>
                </template>
              </el-submenu>

              <el-menu-item
                v-else
                :index="'/' + c"
                :key="'/' + c"
                @click="jumpRouter('/' + child.name)"
              >{{child.label}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          v-else
          :index="'/' + i"
          :key="'/' + i"

          @click="jumpRouter('/' + item.name)"
        >
          <!--:class="{ 'is-active2': defaultActive === '/' + menu.name }"-->
          <template>
            <i :class="'iconfont ' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
    export default {
      name: "SideBar",
      data(){
        return {
          muneDatas:[
            {
              name: 'fEditor',
              label: '组件',
              icon: 'el-icon-s-claim',
              children: [
                {name:'fEditor',label:'1、富文本编辑器',children:[]},
                {name:'breadCrumb',label:'2、面包屑',children:[]},
                {name:'loading',label:'3、loading 组件',children:[]},
                {name:'alert',label:'4、全局alert',children:[]},
                {name:'dialog',label:'5、弹框组件',children:[]},
                {name:'parentPage',label:'6、兄弟组件之间数据传递',children:[]},
                {name:'slot',label:'7、slot插槽',
                  children:[
                    {
                      name:'others',
                      label:'备用7-1',
                      children:[
                        {name:'others',label:'备用7-1'},
                      ]},
                  ]},
              ]
            },
            {
              name: '',
              label: '消费信息',
              icon: 'el-icon-document',
              children: []
            },
            {
              name: '',
              label: '伙伴信息',
              icon: 'el-icon-trophy',
              children: [
                {name:'slot',label:'slot插槽'},
              ]
            },
            {
              name: '',
              label: '客户信息',
              icon: 'el-icon-s-custom',
              children: []
            },
          ],

        }
      },
      methods: {
        jumpRouter(path){
          this.$router.push(path);
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .side-bar-box{
    width: 250PX;
    height: 100%;
    min-height: 800px;
  }
</style>
