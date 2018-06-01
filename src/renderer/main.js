import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'

import './assets/plugins/icon-font/iconfont.css'
import './assets/css/common.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(vueLazyload, {
  error: require('./assets/img/loading.svg'),
  loading: require('./assets/img/loading.svg')
})

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
