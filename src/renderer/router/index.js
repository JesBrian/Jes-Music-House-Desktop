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
          component: () => import('@/views/Pages/IndexPage.vue')
        },
        {
          path: '/search/:key',
          component: () => import('@/views/Pages/SearchPage.vue')
        },
        {
          path: '/rank',
          component: () => import('@/views/Pages/RankPage.vue')
        },
        {
          path: '/play-list',
          component: () => import('@/views/Pages/PlayListPage.vue')
        },
        {
          path: '/singer',
          component: () => import('@/views/Pages/SingerPage.vue')
        },
        {
          path: '/comment',
          component: () => import('@/views/Pages/SongCommentPage.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/Pages/UserPage.vue')
        },
        {
          path: '/collection',
          component: () => import('@/views/Pages/CollectionPage.vue')
        },
        {
          path: '/download',
          component: () => import('@/views/Pages/DownloadPage.vue')
        },
        {
          path: '/local',
          component: () => import('@/views/Pages/LocalPage.vue')
        },
        {
          path: '/friend',
          component: () => import('@/views/Pages/FriendPage.vue')
        },
        {
          path: '/setting',
          component: () => import('@/views/Pages/SettingPage.vue')
        },
        {
          path: '/config',
          component: () => import('@/views/Pages/ConfigPage.vue')
        }
      ]
    }
  ]
})
