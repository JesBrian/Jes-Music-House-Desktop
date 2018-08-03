<template>
  <div v-if="$store.state.Modal.modalType !== ''" :class="{'song-view' : $store.state.Views.showMusicView}" id="modalComponent">
    <div style="width:100%; height:100%; position:relative;">

      <!-- 拟态框内容 -->
      <component :is="$store.state.Modal.modalType" id="modalCopntent" class="cube-bg">
        <div id="modalCloseButton" @click="closeModal" class="super-btn-out">
          <i class="super-btn-in">×</i>
        </div>
      </component>

      <!-- 遮盖层 -->
      <div @click="closeModal" id="maskLayer"></div>
    </div>
  </div>
</template>

<script>
  import NewAlbum from './type/NewAlbum.vue'
  import Share from './type/Share.vue'
  import Warning from './type/Warning.vue'
  import AddAlbum from './type/AddAlbum.vue'
  import OauthLogin from './type/OauthLogin.vue'

  export default {
    name: 'Modal',

    components: {
      NewAlbum, Share, Warning, AddAlbum, OauthLogin
    },

    methods: {
      closeModal () {
        this.$store.commit('CHANGE_MODAL_TYPE')
      }
    }
  }
</script>

<style scoped>
  #modalComponent {
    width:100%; height:100%; top:0; left:0; padding:58px 3px 48px 230px; position:fixed; box-sizing:border-box; z-index:999; background:transparent;
  }
  /**
   * 如果打开了歌曲详情页，专门的 CSS
   */
  #modalComponent.song-view {
    padding:58px 0 48px;
  }


  #modalCopntent {
    top:50%; left:50%; position:absolute; transform:translate(-50%, -50%); z-index:10; box-sizing:border-box; box-shadow:0 0 6px #00d8ff, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }


  #modalCloseButton {
    width:24px; height:24px; top:-4px; right:-3px; position:absolute;
  }
  #modalCloseButton > .super-btn-in {
    width:19px; height:19px; top:51%; line-height:19.5px; text-align:center; font-size:23px;
  }


  #maskLayer {
    width:100%; height:100%; top:0; left:0; position:absolute; background:rgba(0,0,0,0.68); z-index:5;
  }
</style>