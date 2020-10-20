import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
  //1.创建组件构造器
  const con = Vue.extend(Toast)
  const toast = new con()
  // 2. 手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
