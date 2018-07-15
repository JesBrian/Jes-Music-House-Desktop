<template>
  <div class="box-show" style="width:368px; height:52px; position:relative; background:#181818; -webkit-app-region:drag;">
    <div style="width:100%; height:100%; top:0; left:0; position:absolute; z-index:99;">
      <div @click="changeViewMode" class="glass-bg box-show" style="width:38px; height:38px; margin:7.5px; padding:3px; float:left; border-radius:0; -webkit-app-region:no-drag;">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530963872613&di=fc5d6a5013940181dce717ca9034dfb9&imgtype=0&src=http%3A%2F%2Fstatic.open-open.com%2Fnews%2FuploadImg%2F20160513%2F20160513105701_693.png" style="width:100%; height:100%;"/>
      </div>
      <div style="width:100%; height:38px; padding:8px 15px 0 58px; box-sizing:border-box;">
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
      <div style="width:100%; height:14px; padding:3px 15px 0 54px; box-sizing:border-box;">
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

    <div v-if="isShowPlayList === true" style="width:100%; height:238px; top:50px; left:0; padding:5px 4px 3px 2px; position:relative; box-sizing:border-box; background:#121212; z-index:-1;">
      <div style="width:100%; height:100%; padding:0 4px 0 0; box-sizing:border-box; overflow:auto;">
        <div @dblclick="playThisMusic(index)" v-for="(music, index) in $store.state.Music.nowPlayList" :key="music.id" :class="{'active' : index === $store.state.Music.nowPlayIndex}" class="mini-play-list-cell box-shadow">
          <p style="width:10%; height:100%; float:left; text-align:center;">
            <i @click="playThisMusic(index)" class="mh-if play"></i>
          </p>
          <p style="width:72%; height:100%; float:left; text-indent:0.08em;">
            {{ music.name }}
          </p>
          <p style="width:18%; height:100%; float:left; text-align:center;">00:00</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mouseCoords, getElemenPosion } from '../assets/js/commom.js'

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

      checkMusicVolume (volume = 0) {
        if (volume < 0 || volume > 328) {
          return false
        }
        this.$root.eventHub.$emit('changeVolumeLevel', volume / 328)
      },

      /**
       * 点击音量条调节音量大小
       */
      clickMusicVolumeBar (event) {
        let mousePos = mouseCoords(event)
        let x = mousePos.x
        let x1 = getElemenPosion(this.$refs['volumeBar'], 'left')
        this.checkMusicVolume(x - x1)
      },

      /**
       * 拖动音量指针
       */
      dragVolumeControllerPointer (event) {
        let x1 = getElemenPosion(this.$refs['volumeBar'], 'left')
        // 注册document的mousemove事件
        document.onmousemove = (ev) => {
          let oEvent = ev || event
          let mousePos = mouseCoords(oEvent)
          let x = mousePos.x
          this.checkMusicVolume(x - x1)
        }
        // 鼠标放开清除事件
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      },

      playThisMusic (index) {
        this.$root.eventHub.$emit('playThisMusic', index)
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
    width:328px; height:10px; top:50%; margin:0 21px; position:absolute; transform:translateY(-50%); background:#080808; border-radius:6px; cursor:pointer;
  }

  .mini-play-list-cell {
    width:100%; height:28px; line-height:28px;
  }
  .mini-play-list-cell:hover {
    background:#0C0C0C;
  }
  .mini-play-list-cell.active {
    background:#080808;
  }
  .mini-play-list-cell .mh-if.play {
    display:none;
  }
  .mini-play-list-cell:hover .mh-if.play {
    display:block;
  }
  .mini-play-list-cell.active .mh-if.play {
    display:block; color:#00d8ff;
  }
</style>