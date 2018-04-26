<template>
  <div>
    <!-- 顶部菜单 -->
    <top-menu style="z-index:99;"/>

    <!-- 左侧菜单 -->
    <left-menu style="z-index:55;"/>

    <!-- 主体内容 -->
    <div style="width:100%; height:638px; padding:56px 3px 45px 228.5px; box-sizing:border-box; background:#262626;">
      <div id="mainContent" class="cube-bg box-show" style="width:100%; height:100%; padding-top:8px; box-sizing:border-box; overflow:auto;">
        <router-view />
      </div>
    </div>

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

export default {
  name: 'BaseLayout',

  components: {Tips, Modal, MusicPlayer, LeftMenu, TopMenu},

  watch: {
    $route () {
      document.getElementById('mainContent').scrollTop = 0
    }
  }
}
</script>

<style scoped>
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