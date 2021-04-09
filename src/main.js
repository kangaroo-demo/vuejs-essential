import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入自定义指令
import './directives'
// 引入自定义组件
import './components'
// 引入过滤器
import './filters'  
// 引入 mock 文件
import { mockArticles } from './mock/data'
import ls from './utils/localStorage'
// 引入 store
import store from './store'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'

// 使用插件
Vue.use(VueSweetalert2)
Vue.use(Message)

Vue.config.productionTip = false

// 加入 MOCK 测试数据
const AddMockData = (() => {
  // 是否加入测试数据
  const isAddMockData = true
  // 用户数据
  let userArticles = ls.getItem('articles')

  if (Array.isArray(userArticles)) {
    userArticles = userArticles.filter(article => +article.uid === 1)
  } else {
    userArticles = []
  }

  if (isAddMockData) {
    // 合并用户数据和测试数据。使用合并值作为所有文章
    store.commit('UPDATE_ARTICLES',[...userArticles,...mockArticles(60)])
  } else {
    store.commit('UPDATE_ARTICLES',userArticles)
  }
})()

new Vue({
  router,
   // 注入 store
  store,
  render: h => h(App),
}).$mount('#app')
