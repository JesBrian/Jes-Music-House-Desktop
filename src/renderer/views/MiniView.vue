<template>
  <div class="box-show" style="width:368px; height:52px; position:relative; background:#181818; -webkit-app-region:drag;">
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

    <div v-if="isShowVolumeBar === true" style="width:100%; height:36px; top:50px; left:0; position:relative; box-sizing:border-box; background:#121212; z-index:-1;">
      <div @click="clickMusicVolumeBar" ref="volumeBar" class="volume-bar box-show">
        <div :style="{'width' : $store.state.Music.nowVolumeLevel}" style="height:88%; position:relative; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:5px;">
          <a @mousedown="dragVolumeControllerPointer" class="pointer box-show" style="top:-4.5px;"></a>
        </div>
      </div>
    </div>

    <div v-if="isShowPlayList === true" style="width:100%; height:238px; top:50px; left:0; padding:3px 5px 0; position:relative; box-sizing:border-box; overflow:auto; background:#121212; z-index:-1;">
      <div v-for="music in $store.state.Music.nowPlayList" :key="music.id" class="box-shadow" style="width:100%; height:28px;">
        {{ music.name }}
      </div>
    </div>

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

  .pointer {
    width:18px; height:18px; top:-4px; right:-8px; position:absolute; border-radius:50%; background:url(../../../static/images/default/slide-pointer.png) no-repeat; background-size:100% 100%;
  }
  .pointer:hover {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727, 0 0.5px 8px #2af1fc;
  }
  .volume-bar {
    width:88%; height:10px; top:50%; left:50%; position:absolute; transform:translate(-50%, -50%); background:#080808; border-radius:6px; cursor:pointer;
  }
</style>