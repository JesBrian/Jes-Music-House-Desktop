<template>
  <div>
    <!-- 顶部菜单 -->
    <top-menu style="z-index:99;"/>

    <!-- 左侧菜单 -->
    <left-menu style="z-index:55;"/>

    <!-- 主体内容 -->
    <div style="width:100%; height:638px; padding:48px 3px 45px 228.5px; box-sizing:border-box; background:#262626;">
      <div id="mainContent" class="cube-bg box-show" style="width:100%; height:100%; padding-top:8px; box-sizing:border-box; overflow:auto; position:relative;">
        <router-view />
      </div>
    </div>

    <!-- 歌曲详细页面 -->
    <transition name="slide-song">
    <div v-if="$store.state.Music.showMusicView" class="song-view" style="width:100%; height:638px; top:0; left:0; padding:48px 3px; box-sizing:border-box; position:fixed; background:#262626;">
      <div class="cube-bg box-show" style="width:100%; height:100%; padding-top:8px; box-sizing:border-box; overflow:auto; position:relative;">
        <song-view />
      </div>
    </div>
    </transition>

    <!-- 拟态框 -->
    <modal />

    <!-- 操作提示条 -->
    <tips v-if="$store.state.Tips.tips" />

    <!-- 音乐播放器 -->
    <music-player style="z-index:99;"/>
  </div>
</template>

<script>
import TopMenu from '../components/TopMenu/TopMenu.vue'
import LeftMenu from '../components/LeftMenu/LeftMenu.vue'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer.vue'
import Modal from '../components/Modal/Modal.vue'
import Tips from '../components/Tips/Tips.vue'
import SongView from './SongView.vue'

export default {
  name: 'BaseLayout',

  components: {SongView, Tips, Modal, MusicPlayer, LeftMenu, TopMenu},

  watch: {
    '$route' (to, from) {
      document.getElementById('mainContent').scrollTop = 0
      this.$store.commit('CLOSE_MUSIC_VIEW')
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
    transition: all 1s ease-in-out;
  }


  ::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #333;
    border-radius:8px;
  }
  ::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background:linear-gradient(to right, rgba(0, 126, 240, 0.5), rgba(0, 216, 255, 0.5), rgba(0, 216, 255, 0.5));
    -webkit-border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:vertical:hover {
    background:linear-gradient(to right, #007ef0, #00d8ff, #00d8ff);
  }
</style>