import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入自定义指令
import './directives'
// 引入自定义组件
import './components'
// 引入 store
import store from './store'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'  

// 使用插件
Vue.use(VueSweetalert2)
Vue.use(Message)

Vue.config.productionTip = false

new Vue({
  router,
   // 注入 store
  store,
  render: h => h(App),
}).$mount('#app')
