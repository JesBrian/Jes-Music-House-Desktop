import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'

import PageLink from './components/global/page-link/PageLink.vue'

import './assets/plugins/icon-font/iconfont.css'
import './assets/css/common.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = store.state.Global.API_URL // 配置域名
axios.defaults.withCredentials = true
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(vueLazyload, {
  error: require('./assets/img/loading.svg'),
  loading: require('./assets/img/loading.svg')
})

Vue.use(PageLink)
Vue.component('page-link', PageLink)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  template: '<App/>'
}).$mount('#app')
