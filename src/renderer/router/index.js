import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/views/Index.vue').default
    },
    {
      path: '/search',
      component: require('@/views/Search.vue').default
    },
    {
      path: '/play-list',
      component: require('@/views/PlayList.vue').default
    },
    {
      path: '/user',
      component: require('@/views/User.vue').default
    }
  ]
})
