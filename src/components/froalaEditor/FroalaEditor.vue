<template>
  <!--富文本编辑器-->
  <div class="card-box">
    <froala id="edit" :tag="'textarea'" :config="config" v-model="froalaData"></froala>
  </div>
</template>

<script>
import 'froala-editor/js/languages/zh_cn'
export default {

  name: 'FroalaEditor',
  data () {
    return {
      config: {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false,
        // toolbarButtons: ['bold', 'italic'],
        fontFamily: {
          '宋体': '宋体',
          '楷体': '楷体'
        },
        theme: 'dark', // 需要引入主题皮肤文件
        inlineStyles: { // 定义样式选项:
          'Big Red': 'font-size: 20px; color: red;',
          'Small Blue': 'font-size: 14px; color: blue;'
        },
        language: 'zh_cn',
        events: {
          initialized: function () {
            // console.log('initialized')
          },
          focus: function (e, editor) {
            // console.log(this);
          }
        }
      },
      froalaData: 'Edit Your Content Here!'
    }
  }
}
</script>

<style scoped>

</style>
