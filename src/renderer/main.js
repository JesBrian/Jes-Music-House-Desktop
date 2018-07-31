import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'
import axios from 'axios'
import localForage from 'localforage'
import { ipcRenderer } from 'electron'

import PageLink from './components/global/page-link/PageLink.vue'

import './assets/plugins/icon-font/iconfont.css'
import './assets/css/common.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = store.state.Global.DEV_API_URL // 本地开发配置 API 路径
// axios.defaults.baseURL = store.state.Global.PROD_API_URL // 服务器生产配置 API 路径
axios.defaults.withCredentials = true
Vue.http = Vue.prototype.$http = axios

localForage.config({
  driver: localForage.INDEXEDDB, // Force WebSQL; same as using setDriver()
  name: 'Music House',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'MH-localforage', // Should be alphanumeric, with underscores.
  description: 'Music House'
})
Vue.localForage = Vue.prototype.$localForage = localForage

Vue.ipcRenderer = Vue.prototype.$ipcRenderer = ipcRenderer

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
