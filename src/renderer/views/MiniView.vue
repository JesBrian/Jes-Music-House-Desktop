<template>
  <div class="glass-bg box-show" style="width:368px; height:52px; position:relative; -webkit-app-region:drag;">
    <div style="width:100%; height:100%; top:0; left:0; position:absolute; z-index:99;">
      <div @click="changeViewMode" class="cube-bg" style="width:38px; height:38px; margin:6px; padding:3px; float:left; box-sizing:border-box; -webkit-app-region:no-drag;">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530963872613&di=fc5d6a5013940181dce717ca9034dfb9&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Fnews%2FuploadImg%2F20160513%2F20160513105701_693.png" style="width:100%; height:100%;"/>
      </div>
      <div style="width:100%; height:38px; padding:6px 15px 0 52px; box-sizing:border-box;">
        <div id="miniViewInfoAndOperation">
          <div id="miniViewInfo">
            <p class="text-hidden" style="text-align:center; font-size:16px;">Be Somewhere</p>
            <p class="text-hidden" style="font-size:14px;">JesBrianJesBrianJesBrianJesBrianJesBrianJesBrian</p>
          </div>
          <div id="miniViewOperation">
              <i @click="changePlayListIndex('prev')" class="mh-if double-arrow-left" style="margin-left:32px; float:left; font-size:19px;"></i>
              <i @click="changePlayStatus" :class="$store.state.Music.playStatus === true ? 'stop' : 'play'" class="mh-if" style="font-size:32px;"></i>
              <i @click="changePlayListIndex('next')" class="mh-if double-arrow-right" style="margin-right:23px; float:right; font-size:19px;"></i>
          </div>
        </div>
        <div style="width:35%; height:100%; float:right; text-align:right; line-height:33px;">
          <i @click="addCollection" class="music-operation mh-if non-colloection"></i>
          <i @click="showLyric" :class="$store.state.Music.showLyric === true ? 'active' : ''" class="music-operation mh-if lyrics"></i>
          <i @click="showVolumeBar" :class="isShowVolumeBar === true ? 'active' : ''" class="music-operation mh-if volume-on"></i>
          <i @click="showPlayList" :class="isShowPlayList === true ? 'active' : ''" class="music-operation mh-if music-list"></i>
        </div>
      </div>
      <div style="width:100%; height:14px; padding:0 15px 0 50px; box-sizing:border-box;">
        <div style="width:100%; height:3px; position:relative; background:#555; border-radius:3px;">
            <div :style="{'width' : $store.state.Music.nowPlayRate}" style="height:100%; top:0; left:0; position:absolute; border-radius:3px; background:#38daf0;"></div>
        </div>
      </div>
      <i @click="closeWindow" style="top:-1px; right:4px; position:absolute; cursor:pointer; -webkit-app-region:no-drag;">&times;</i>
    </div>

    <div v-if="isShowVolumeBar === true" class="glass-bg" style="width:100%; height:28px; top:49px; left:0; position:relative; z-index:-1;"></div>

    <div v-if="isShowPlayList === true" class="glass-bg" style="width:100%; height:118px; top:48.5px; left:0; position:relative; z-index:-1;"></div>

  </div>
</template>

<script>
  export default {
    name: 'MiniView',

    data () {
      return {
        isShowVolumeBar: false,
        isShowPlayList: false
      }
    },

    methods: {
      changeViewMode () {
        this.$store.commit('CLOSE_MINI_VIEW')
        this.localForage.getItem('mainView', (result, value) => {
          this.ipcRenderer.send('show-main-view', value)
        })
      },

      changePlayStatus () {
        this.$store.commit('CHANGE_PLAY_STATUS')
      },
      changePlayListIndex (type) {
        this.$root.eventHub.$emit('changePlayListIndex', type)
      },

      addCollection () {
      },
      showLyric () {
        this.$store.commit('CHANGE_SHOW_LYRIC')
      },
      showVolumeBar () {
        this.isShowPlayList = false
        this.isShowVolumeBar = !this.isShowVolumeBar
        this.ipcRenderer.send('mini-show-content', this.isShowVolumeBar, 'volume')
      },
      showPlayList () {
        this.isShowVolumeBar = false
        this.isShowPlayList = !this.isShowPlayList
        this.ipcRenderer.send('mini-show-content', this.isShowPlayList, 'playList')
      },

      closeWindow () {
        this.ipcRenderer.send('hide-main-window')
      }
    }
  }
</script>

<style scoped>
  #miniViewInfoAndOperation {
    width:60%; height:100%; float:left; -webkit-app-region:no-drag;
  }
  #miniViewInfoAndOperation > #miniViewInfo {
    width:100%; height:100%;
  }
  #miniViewInfoAndOperation:hover > #miniViewInfo {
    display:none;
  }
  #miniViewInfoAndOperation > #miniViewOperation {
    width:100%; height:100%; display:none; text-align:center; line-height:29px;
  }
  #miniViewInfoAndOperation:hover > #miniViewOperation {
    display:block;
  }

  .music-operation {
    margin:0 5px 0 0; font-size:18px; -webkit-app-region:no-drag;
  }
  .music-operation:hover, .music-operation.active {
    color:#00d8ff;
  }
</style>