<template>
  <div>
    <!-- 顶部菜单 -->
    <top-menu style="z-index:99;"/>

    <!-- 左侧菜单 -->
    <left-menu style="z-index:55;"/>

    <!-- 主体内容 -->
    <div style="width:100%; height:638px; padding:48px 3px 45px 228.5px; box-sizing:border-box; background:#181818;">
      <div id="mainContent" class="box-show" style="width:100%; height:100%; padding-top:8px; box-sizing:border-box; overflow:auto;">
        <router-view />
      </div>
    </div>

    <!-- 歌曲详细页面 -->
    <transition name="slide-song">
      <div v-if="$store.state.Music.showMusicView" class="song-view" style="width:100%; height:638px; top:0; left:0; padding:48px 2px 45px; box-sizing:border-box; position:fixed; background:#181818;">
        <song-view />
      </div>
    </transition>

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
import TopMenu from './Layout/TopMenu/TopMenu.vue'
import LeftMenu from './Layout/LeftMenu/LeftMenu.vue'
import MusicPlayer from './Layout/MusicPlayer/MusicPlayer.vue'
import Modal from '../components/base/Modal/Modal.vue'
import Tips from '../components/base/Tips/Tips.vue'
import SongView from './SongView.vue'
import AlertMenu from '../components/base/AlertMenu/AlertMenu.vue'

export default {
  name: 'BaseLayout',

  components: {
    AlertMenu, SongView, Tips, Modal, MusicPlayer, LeftMenu, TopMenu
  },

  watch: {
    '$route' (to, from) {
      document.getElementById('mainContent').scrollTop = 0
      if (this.$store.state.Music.showMusicView) {
        this.$store.commit('CLOSE_MUSIC_VIEW')
      }
    }
  }
}
</script>

<style scoped>

  .song-view {
    width:100%; top:0; left:0; position:absolute; z-index:55;
  }
  .slide-song-enter, .slide-song-leave-active {
    transform: translate(-80%, 80%) scale(0 , 0);
    opacity:0;
  }
  .slide-song-enter-active, .slide-song-leave-active {
    transition: all 0.538s ease-in-out;
  }
</style>