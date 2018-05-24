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
          component: () => import('@/views/type/IndexPage.vue')
        },
        {
          path: '/search/:key',
          component: () => import('@/views/type/SearchPage.vue')
        },
        {
          path: '/rank',
          component: () => import('@/views/type/RankPage.vue')
        },
        {
          path: '/play-list',
          component: () => import('@/views/type/PlayListPage.vue')
        },
        {
          path: '/singer',
          component: () => import('@/views/type/SingerPage.vue')
        },
        {
          path: '/comment',
          component: () => import('@/views/type/SongCommentPage.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/type/UserPage.vue')
        },
        {
          path: '/collection',
          component: () => import('@/views/type/CollectionPage.vue')
        },
        {
          path: '/download',
          component: () => import('@/views/type/DownloadPage.vue')
        },
        {
          path: '/local',
          component: () => import('@/views/type/LocalPage.vue')
        },
        {
          path: '/friend',
          component: () => import('@/views/type/FriendPage.vue')
        },
        {
          path: '/setting',
          component: () => import('@/views/type/SettingPage.vue')
        },
        {
          path: '/config',
          component: () => import('@/views/type/ConfigPage.vue')
        }
      ]
    }
  ]
})
