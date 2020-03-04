import ColorPicker from "../packages/color-picker/index"


import {version} from "../package"


const components = [
  ColorPicker
]


const install = function (Vue, opts = {}) {
  // 省略前置操作（国际化等）

  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

}


// vue存在window时，自动安装
// vue底层机制会阻止相同插件安装两次
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}


export default {
  version,
  ColorPicker
}






