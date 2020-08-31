import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App'

// 解决移动端点击有300ms延迟的问题
import fastclick from 'fastclick'
fastclick.attach(document.body)

// 引入全局样式
import './common/stylus/index'

import { Swipe,SwipeItem } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)

new Vue({
  router,
  store,
  render: h=>h(App)
}).$mount('#app')