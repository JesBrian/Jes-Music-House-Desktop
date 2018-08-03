<template>
  <div>
    <!-- 顶部菜单 -->
    <top-menu style="z-index:99;"/>

    <!-- 左侧菜单 -->
    <left-menu style="z-index:55;"/>

    <!-- 主体内容 -->
    <div v-show="!$store.state.Views.showMiniView" style="width:100%; height:638px; padding:53px 3px 45px 228.5px; box-sizing:border-box; background:#181818;">
      <div id="mainContent" class="box-show" style="width:100%; height:100%; padding-top:8px; box-sizing:border-box; overflow:auto;">
        <router-view />
      </div>
    </div>

    <!-- 歌曲详细页面 -->
    <transition name="slide-song">
      <div v-if="$store.state.Views.showMusicView" class="song-view">
        <song-view />
      </div>
    </transition>
    <!-- mini模式页面 -->
    <div v-if="$store.state.Views.showMiniView" style="width:368px; height:52px; top:0; left:0; position:fixed; z-index:999;">
      <mini-view />
    </div>

    <!-- 拟态框 -->
    <modal />

    <!-- 操作提示条 -->
    <tips v-if="$store.state.Tips.tips" />

    <!-- 鼠标点击右键显示菜单 -->
    <alert-menu v-if="$store.state.AlertMenu.menuType" />

    <!-- 音乐播放器 -->
    <music-player style="z-index:99;"/>
  </div>
</template>

<script>
  import TopMenu from './layout/top-menu/TopMenu.vue'
  import LeftMenu from './layout/left-menu/LeftMenu.vue'
  import MusicPlayer from './layout/music-player/MusicPlayer.vue'
  import Modal from './layout/modal/Modal.vue'
  import Tips from './layout/tips/Tips.vue'
  import MiniView from './MiniView.vue'
  import SongView from './SongView.vue'
  import AlertMenu from './layout/alert-menu/AlertMenu.vue'

  export default {
    name: 'BaseLayout',

    components: {
      AlertMenu, SongView, MiniView, Tips, Modal, MusicPlayer, LeftMenu, TopMenu
    },

    watch: {
      '$route' (to, from) {
        document.getElementById('mainContent').scrollTop = 0
      },

      routerHistoryRecordNowIndex () {
        this.$router.push(this.$store.state.Router.historyRecord[this.$store.state.Router.nowIndex])
      }
    },

    computed: {
      routerHistoryRecordNowIndex () {
        return this.$store.state.Router.nowIndex
      }
    },

    created () {
      this.$ipcRenderer.on('window-move', (event, position) => {
        if (this.$store.state.Views.showMiniView === true) {
          this.$localForage.setItem('miniView', position)
        } else {
          this.$localForage.setItem('mainView', position)
        }
      })
      this.$ipcRenderer.send('save-view-position')
    }
  }
</script>

<style scoped>

  .song-view {
    width:100%; height:638px; top:0; left:0; padding:62px 3px 45px 0; position:fixed; box-sizing:border-box; z-index:55; background:#181818;
  }
  .slide-song-enter, .slide-song-leave-active {
    transform: translate(-80%, 80%) scale(0 , 0);
    opacity:0;
  }
  .slide-song-enter-active, .slide-song-leave-active {
    transition: all 0.538s ease-in-out;
  }
</style>