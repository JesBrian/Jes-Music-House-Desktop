import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/views/DesktopFrame').default
    },
    {
      path: '/index',
      component: require('@/views/type/Index.vue')
    }
  ]
})
