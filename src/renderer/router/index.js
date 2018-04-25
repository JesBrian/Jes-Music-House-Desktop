import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/views/BaseLayout.vue').default,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: require('@/views/type/Index.vue').default
        },
        {
          path: '/search',
          component: require('@/views/type/Search.vue').default
        },
        {
          path: '/rank',
          component: require('@/views/type/Rank.vue').default
        },
        {
          path: '/play-list',
          component: require('@/views/type/PlayList.vue').default
        },
        {
          path: '/singer',
          component: require('@/views/type/Singer.vue').default
        },
        {
          path: '/song',
          component: require('@/views/type/Song.vue').default
        },
        {
          path: '/album',
          component: require('@/views/type/Album.vue').default
        },
        {
          path: '/disc',
          component: require('@/views/type/Disc.vue').default
        },
        {
          path: '/user',
          component: require('@/views/type/User.vue').default
        },
        {
          path: '/setting',
          component: require('@/views/type/Setting.vue').default
        },
        {
          path: '/config',
          component: require('@/views/type/Config.vue').default
        }
      ]
    }
  ]
})
