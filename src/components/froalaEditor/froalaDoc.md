
一、加载必要资源
<link href="https://cdn.bootcss.com/froala-editor/3.1.0/css/froala_editor.pkgd.css" rel="stylesheet"> <!-- 必要资源 -->
<link href="https://cdn.bootcss.com/froala-editor/3.1.0/css/themes/dark.css" rel="stylesheet">  <!-- 编辑器主题 -->

<script src="https://cdn.bootcss.com/froala-editor/3.1.0/js/froala_editor.pkgd.min.js"></script> <!-- 必要资源 -->
<script src="https://cdn.bootcss.com/froala-editor/3.0.6/js/languages/zh_cn.js"></script> <!-- 中文转换脚本 -->
关于引入必要资源的几点说明：

Froala可以引入全功能代码，也可以根据自己的需求分插件引入
以 .pkgd 结尾的文件就是全功能代码
如果需要某几个插件功能，可以先分别引入没有带 .pkgd 的js和css文件，再根据需要的功能另行引入其它插件文件
Froala的CDN资源地址
二、创建HTML结构
<div id="froala-editor">
    <p>The buttons below will destroy and init the rich text editor again.</p>  
</div>
三、编辑器创建
const editor = new FroalaEditor('#froala-editor');
四、参数
new FroalaEditor('#froala-editor', {
    toolbarButtons: ['bold', 'italic'],
    language: 'zh_cn'
});
1. 自定义工具栏
属性：
toolbarButtons: 屏幕尺寸 >= 1200px 时使用的工具栏组
toolbarButtonsMD: >= 992px时使用
toolbarButtonsSM: >= 768px时使用
toolbarButtonsXS: < 768px时使用
取值：bold: 粗体、italic: 斜体、underline: 下划线、strikeThrough: 删除线、 fontFamily: 字体、fontSize: 字号、 paragraphFormat: 段落格式、 align: 字体对齐、textColor: 字体颜色、 backgroundColor: 背景颜色、formatOL: 有序列表、 formatUL: 无序列表、 indent: 缩进、 outdent: 减少缩进、emoticons: 表情符号、redo: 恢复、undo: 撤销、insertImage: 插入图片、 insertLink: 插入链接、 insertFile: 插入文件、 insertVideo: 插入视频、subscript: 下标、superscript: 上标、 html: 查看html结构、fullscreen: 全屏、 selectAll: 全选、 insertHR: 插入水平线、 insertTable: 插入表格

2. 中文
language: 'zh_cn' (前提是你已经引入过JS脚本)

3. 图片默认宽度
imageDefaultWidth: 300

4. 事件
events: {
  focus() {console.log('聚焦')}, 
  blur() {console.log('失焦')},
  contentChanged() {console.log('内容改变，有一段延迟时间')},
  'image.removed': function(img) {console.log('图片删除', img)},
  'image.beforeUpload': function(files) {console.log('上传的图片: ', files[0])},
  initialized() {console.log('编辑器初始化')},
  destroy() {console.log('编辑器销毁')},
  'link.beforeInsert'() {console.log('链接插入前')},
  contentChanged() {console.log('编辑器内容变化')}
}
5. 链接样式选项
linkStyles: {
  class1: 'Class 1',
  class2: 'Class 2',
  a: 'b'
}
前面的属性：体现在HTML结构上的类名
后面的值：体现在编辑器中的选项

6. 链接预设
linkList: [
  {
    text: '链接锚文本',
    href: '链接地址',
      target: '_blank'  // 新标签页中打开
  }
]
6. 回车键转换HTML标签
属性: enter
取值:
FroalaEditor.ENTER_DIV: 转换为div标签
FroalaEditor.ENTER_P: 转换为p标签
FroalaEditor.ENTER_BR: 转换为br标签

7. 行内工具栏
toolbarInline: true

8. 定位的z-index
zIndex: 10

9. 自定义颜色
colorsBackground: 背景颜色数组
colorsText: 字体颜色数组
colorsStep: 每行显示几个颜色块

10. 编辑器宽度、高度设定
width: 500
height: 1000
heightMax: 最大高度
heightMin: 最小高度

11. 自定义选区行内样式选项
toolbarButtons: ['inlineStyle'], // 在工具栏中使用自定义样式按钮: 
inlineStyles: { // 定义样式选项:
  'Big Red': 'font-size: 20px; color: red;',
  'Small Blue': 'font-size: 14px; color: blue;'
}
12. 自定义整行类名选项
toolbarButtons: ['paragraphStyle'], // 在工具栏中使用自定义整行样式按钮
paragraphStyles: {  // 定义类名选项
  class1: 'Class 1',
  class2: 'Class 2'
}
13. 空白占位符
placeholderText: '这是编辑器空白占位文字'

14. 改变主题皮肤
theme: 'dark' 或 'gray' 或 'royal'(默认)

15. 定义一个Tab代表几个空格
tabSpaces: 4

16. 自定义按钮组
toolbarButtons: {
  moreText: {
    buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'textColor'],  // 按钮组
    align: 'left',  // 按钮组在工具栏上的位置(left、right)
    buttonsVisible: 2 // 在工具栏主页面中显示前两个，其余通过点击更多按钮查看
  },
  moreParagraph: {},
  moreRich: {},
  moreMisc: {}
}
自定义更多文字按钮组: moreText
自定义更多段落按钮组: moreText
自定义更多功能按钮组: moreRich
自定义更多辅助按钮组: moreMisc
17. 自定义字体
fontFamily: {
  '宋体': '宋体',
  '楷体': '楷体',
  ''
}
前面的键表示在CSS中引入的字体
后面的值表示在编辑器中显示的字体列表项

18. 选中字体格式展示
显示字体：fontFamilySelection: true
显示文字大小：fontSizeSelection: true
显示段落格式：paragraphFormatSelection: true

19. 保留删除时的格式
keepFormatOnDelete: true

五、API接口
获取html结构: editor.html.get()
设置编辑器内容: editor.html.set()
往编辑器里插入内容: editor.html.insert();
编辑器聚焦: editor.events.focus()
编辑器销毁: editor.destroy()
html代码结构美化: editor.codeBeautifier.run(editor.html.get())
触发编辑器命令(可以用这个接口来设置快捷键): editor.commands.exec('命令')