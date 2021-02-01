import Vue from "vue";
import Alert from "./Alert";

const alertBox = Vue.extend(Alert);

alertBox.install =(options)=>{
  console.log('$alert  方法被调用');  // 全局任何地方调用都执行 逻辑...

  if (!options) {
    return null;
  }

  if (options === undefined || options === null) {
    options = {
      content: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      content: options
    }
    // if (type != undefined && options != null) {
    //   options.type = type;
    // }
  }

  let instance = new alertBox({
    data: options
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })

  console.log('$alert  方法调用完成');
  alertBox.instance = instance
  return instance;

}

export default alertBox;
