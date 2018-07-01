import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/BaseLayout.vue'),
      redirect: '/index/recommend',
      children: [
        {
          path: '/index/:type',
          component: () => import('@/views/pages/IndexPage.vue')
        },
        {
          path: '/search/:key/:type',
          component: () => import('@/views/pages/SearchPage.vue')
        },
        {
          path: '/rank',
          component: () => import('@/views/pages/RankPage.vue')
        },
        {
          path: '/play-list',
          component: () => import('@/views/pages/PlayListPage.vue')
        },
        {
          path: '/singer',
          component: () => import('@/views/pages/SingerPage.vue')
        },
        {
          path: '/comment',
          component: () => import('@/views/pages/SongCommentPage.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/pages/UserPage.vue')
        },
        {
          path: '/follow',
          component: () => import('@/views/pages/FollowPage.vue')
        },
        {
          path: '/download',
          component: () => import('@/views/pages/DownloadPage.vue')
        },
        {
          path: '/local',
          component: () => import('@/views/pages/LocalPage.vue')
        },
        {
          path: '/friend',
          component: () => import('@/views/pages/FriendPage.vue')
        },
        {
          path: '/setting',
          component: () => import('@/views/pages/SettingPage.vue')
        },
        {
          path: '/config',
          component: () => import('@/views/pages/ConfigPage.vue')
        }
      ]
    }
  ]
})
