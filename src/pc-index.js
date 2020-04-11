import Icon from "../packages/pc/icon/index"


const components = [
  Icon
]

const install = function(Vue,opts={}){
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // ...
}



/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}



export default {
  version: '2.13.0',
  install,
  Icon
}