import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/BaseLayout.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: () => import('@/views/type/Index.vue')
        },
        {
          path: '/search/:key',
          component: () => import('@/views/type/Search.vue')
        },
        {
          path: '/rank',
          component: () => import('@/views/type/Rank.vue')
        },
        {
          path: '/play-list',
          component: () => import('@/views/type/PlayList.vue')
        },
        {
          path: '/singer',
          component: () => import('@/views/type/Singer.vue')
        },
        {
          path: '/comment',
          component: () => import('@/views/type/SongComment.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/type/User.vue')
        },
        {
          path: '/setting',
          component: () => import('@/views/type/Setting.vue')
        },
        {
          path: '/config',
          component: () => import('@/views/type/Config.vue')
        }
      ]
    }
  ]
})
