<template>
  <div class="glass-bg box-show ban-select" style="width:100%; height:46px; bottom:0; left:0; position:fixed; border-radius:0; color:#AAA; text-align:center; line-height:44px;">

    <!-- 音乐播放器资源 -->
    <audio id="musicSource" ref="musicSource" :src="$store.state.Global.RESOURCE_URL + 'test1.mp3'"></audio>

    <!-- 播放器控制样式 -->
    <div style="width:188px; height:100%; float:left; text-align:center;">
      <i class="mh-if double-arrow-left" style="margin:1px 0 0 33px; float:left; font-size:22px;"></i>
      <i @click="changePlayStatus" :class="playStatus ? 'stop' : 'play'" class="mh-if" style="display:inline-block; font-size:35px;"></i>
      <i class="mh-if double-arrow-right" style="margin:1px 28px 0 0; float:right; font-size:22px;"></i>
    </div>

    <!-- 播放进度部分 -->
    <div style="width:560px; height:100%; float:left;">
      <!-- 当前播放时间 -->
      <div style="width:53px; height:100%; float:left; font-size:15px;">{{ timeStampToMinuteSecondTime(musicCTime) }}</div>
      <!-- 进度条 -->
      <div style="display:inline-block;">
        <div @click="clickMusicProgressBar" ref="progressBar" class="progress-bar box-show" style="width:438px; height:10px; margin-top:8px; position:relative; background:#080808; border-radius:6px; cursor:pointer;">
          <div style="width:80%; height:6px; top:2.4px; left:0; position:absolute; background:#181818; border-radius:6px;"></div>
          <div :style="{'width' : musicCTime / musicDTime * 100 + '%'}" style="height:100%; top:0; left:0; position:absolute; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px;">
            <a @mousedown="dragProgressControllerPointer" class="pointer box-show"></a>
          </div>
        </div>
      </div>
      <!-- 歌曲总播放时间 -->
      <div style="width:53px; height:100%; float:right; font-size:15px;">{{ timeStampToMinuteSecondTime(musicDTime) }}</div>
    </div>

    <!-- 控制音量部分 -->
    <div style="width:180px; height:100%; margin:0 0 0 28px; float:left;">
      <!-- 音量开关 -->
      <i @click="changeVolumeStatus" :class="volumeStatus ? 'volume-on' : 'volume-off'" class="mh-if" style="margin-right:6px; font-size:24px;"></i>
      <!-- 音量条 -->
      <div @click="clickMusicVolumeBar" :class="{'ban-change': !volumeStatus}" ref="volumeBar" class="volume-bar box-show">
        <div :style="{'width' : volumeLevel * 100 + '%'}" style="height:88%; margin-top:1px; position:relative; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:5px;">
          <a @mousedown="dragVolumeControllerPointer" class="pointer box-show" style="top:-4.5px;"></a>
        </div>
      </div>
    </div>

    <!-- 其他控制部分 -->
    <div>
      <!-- 播放模式控制 -->
      <i @click="changePlayModel" :class="playModel" class="play-model mh-if">
        <span class="glass-bg">{{ playModel === 'loop' ? '循环列表': playModel === 'single-loop' ? '单曲循环' : '随机播放' }}</span>
      </i>
      <!-- 展示歌词控制 -->
      <i @click="changeShowLyric" :class="{'active' : $store.state.Music.showLyric}" class="mh-if lyrics" style="margin:5px; font-size:24px;"></i>
      <!-- 展示播放列表控制 -->
      <i @click="changePlayListContentStatus" class="mh-if menu" style="margin:0 32px 0 5px; position:relative; z-index:2; font-size:23px;"><span>12</span></i>
    </div>

    <!-- 播放列表内容区域 -->
    <div v-if="playListContentStatus" class="box-show" style="width:688px; height:388px; bottom:45px; right:0; position:absolute; background:#222; border-radius:4px 4px 0 0; opacity:0.99;">
      <div class="box-show" style="width:100%; height:38px; position:relative; line-height:38px;">
        <span style="margin-left:12px; float:left;">
          <i class="mh-if menu" style="margin-right:5px;"></i>总12首
        </span>
        <span style="margin-left:480px; float:left;">
          <i class="mh-if trash" style="margin-right:5px; font-size:17px;"></i>清空
        </span>
        <div style="width:288px; height:26px; top:50%; left:50%; transform:translate(-50%,-50%); position:absolute; line-height:25px;">
          <div @click="changePlayListContentType('now')" :class="playListContentType === 'now' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:left; border-radius:13px 0 0 13px; cursor:pointer;">播放列表</div>
          <div @click="changePlayListContentType('history')" :class="playListContentType === 'history' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:left; border-radius:0 13px 13px 0; cursor:pointer;">历史纪录</div>
        </div>
        <i @click="changePlayListContentStatus" class="mh-if close" style="top:0; right:6px; position:absolute; font-size:22px;"></i>
      </div>
      <ul style="width:99.5%; height:348px; margin:0; padding:0 2px; box-sizing:border-box; overflow:auto;">
        <li v-for="n in 120" class="box-shadow" style="background:#181818;">
          <div @click.right="showAlertMenu" :class="{'active' : n === 5}" class="play-list-cell" style="width:100%; height:30px; margin:2px 0; padding:0 6px; box-sizing:border-box; text-align:left; line-height:30px;">
            <i class="mh-if play"></i>
            <p class="text-hidden" style="width:318px; height:100%; float:left;">{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}{{ n }}</p>
            <p class="music-oper" style="margin:0 12px;">
              <i @click="collectionThisSong" class="mh-if collection-music" style="margin:0 2px;"></i>
              <i @click="shareThisSong" class="mh-if share" style="margin:0 2px;"></i>
              <i class="mh-if download" style="margin:0 2px;"></i>
              <i class="mh-if trash" style="margin:0 2px;"></i>
            </p>
            <span style="margin:0 8px 0 12px; float:right;">00:00</span>
            <p class="text-hidden" style="width:132px; float:right;">JesBrian{{ n }}JesBrian{{ n }}JesBrian{{ n }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { timeStampToMinuteSecondTime, mouseCoords, getElemenPosion } from '../../../assets/js/commom.js'

  export default {
    name: 'MusicPlayer',

    data () {
      return {
        musicSource: null,
        playListContentStatus: false,
        playListContentType: 'now',
        playModel: 'loop', // 音乐播放模式 - [ loop列表循环/single-loop单曲循环/random随机播放 ]
        volumeStatus: true, // 是否开启音量开关
        volumeLevel: 0.68, // 音量大小
        musicCTime: 0, // 歌曲播放当前时间
        musicDTime: 0 // 歌曲总播放时间
      }
    },

    watch: {
      playStatus () {
        if (this.$store.state.Music.playStatus) {
          this.musicSource.play()
        } else {
          this.musicSource.pause()
        }
      },

      volumeLevel () {
        this.musicSource.volume = this.volumeLevel
      }
    },

    computed: {
      playStatus () {
        return this.$store.state.Music.playStatus
      }
    },

    created () {
      this.$root.eventHub.$on('closeCloverComponent', () => {
        this.playListContentStatus = false
      })

      this.ipcRenderer.on('save-music-info', () => {
        let musicData = {
          playModel: this.playModel,
          volumeStatus: this.volumeStatus,
          volumeLevel: this.volumeLevel,
          musicCTime: this.musicCTime
        }
        this.localForage.setItem('music', musicData, () => {
          this.ipcRenderer.send('window-all-closed')
        })
      })
    },

    mounted () {
      this.musicSource = this.$refs['musicSource']
      this.musicSource.addEventListener('timeupdate', this._currentTime)
      this.musicSource.addEventListener('canplay', this._durationTime)

      // 读取 localForage 音乐信息
      this.localForage.getItem('music', (result, value) => {
        if (value) {
          this.playModel = value.playModel
          this.volumeStatus = value.volumeStatus
          this.volumeLevel = value.volumeLevel
          this.musicCTime = value.musicCTime
        }
      })
    },

    beforeDestroy () {
      this.musicSource.removeEventListener('timeupdate', this._currentTime)
      this.musicSource.removeEventListener('canplay', this._durationTime)
    },

    methods: {
      _currentTime () {
        this.musicCTime = this.musicSource.currentTime
      },
      _durationTime () {
        this.musicDTime = this.musicSource.duration
      },

      changePlayStatus () {
        this.$store.commit('CHANGE_PLAY_STATUS')
      },

      changeVolumeStatus () {
        this.volumeStatus = !this.volumeStatus
        this.volumeStatus ? this.musicSource.volume = this.volumeLevel : this.musicSource.volume = 0
      },

      changePlayModel () {
        let type = ''
        if (this.playModel === 'loop') {
          type = 'single-loop'
        } else if (this.playModel === 'single-loop') {
          type = 'random'
        } else {
          type = 'loop'
        }
        this.playModel = type
      },

      changeShowLyric () {
        this.$store.commit('CHANGE_SHOW_LYRIC')
      },

      changePlayListContentStatus () {
        this.playListContentStatus = !this.playListContentStatus
      },

      changePlayListContentType (type = 'now') {
        this.playListContentType = type
      },

      collectionThisSong () {
        this.$store.commit('CHANGE_MODAL_TYPE', 'AddAlbum')
      },
      shareThisSong () {
        this.$store.commit('CHANGE_MODAL_TYPE', 'Share')
      },

      /**
       * 修改音乐播放进度
       */
      changePlayProgress (progress = 0) {
        if (progress < 0 || progress > 438) {
          return false
        }
        clearInterval(this.timer)
        let progressRate = progress / 438
        this.musicSource.currentTime = Number.parseInt(this.musicDTime * progressRate)
      },

      /**
       * 点击播放进度条
       */
      clickMusicProgressBar (event) {
        let mousePos = mouseCoords(event)
        let x = mousePos.x
        let x1 = getElemenPosion(this.$refs['progressBar'], 'left')
        this.changePlayProgress(x - x1)
      },

      /**
       * 拖动播放进度条指针
       */
      dragProgressControllerPointer (event) {
        let x1 = getElemenPosion(this.$refs['progressBar'], 'left')
        // 注册document的mousemove事件
        document.onmousemove = (ev) => {
          let oEvent = ev || event
          let mousePos = mouseCoords(oEvent)
          let x = mousePos.x
          this.changePlayProgress(x - x1)
        }

        // 鼠标放开清除事件
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      },

      /**
       * 修改音量大小
       */
      changeMusicVolume (volume = 0) {
        if (volume < 0 || volume > 138) {
          return false
        }
        this.volumeLevel = volume / 138
      },

      /**
       * 点击音量条调节音量大小
       */
      clickMusicVolumeBar (event) {
        let mousePos = mouseCoords(event)
        let x = mousePos.x
        let x1 = getElemenPosion(this.$refs['volumeBar'], 'left')
        this.changeMusicVolume(x - x1)
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
          this.changeMusicVolume(x - x1)
        }

        // 鼠标放开清除事件
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      },

      showAlertMenu (event) {
        let position = mouseCoords(event)
        let alertMenuConf = {
          type: 'PlayListHistoryMenu',
          position: position
        }
        this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
      },

      timeStampToMinuteSecondTime (timestamp) {
        return timeStampToMinuteSecondTime(timestamp)
      }
    }
  }
</script>

<style scoped>
  .mh-if {
    color:#999;
    text-shadow: 0 0 6px #000;
  }
  .mh-if:hover, .mh-if.active {
    cursor:pointer;
    color: #20dbfc;
    text-shadow: 0 0 3px #444, 0 0 18px #000;
    opacity:1!important;
  }
  .mh-if.menu > span {
    width:38px; height:17px; top:3.2px; left:20px; padding:0 3px; position:absolute; z-index:-1; box-sizing:border-box; border-radius:0 10px 10px 0;
    background:#222;
    box-shadow:0.3px 0.3px 2.5px -0.6px #AAA, inset 0 0 6px #080808, inset 0 2px 2px #080808, inset 3px 0 2px #080808, inset -2px 0 2px #080808;
    text-align:center; font-size:12.5px; line-height:17px; color:#888; text-shadow:2px 2px 6px #000;
  }
  .mh-if.menu:hover > span {
    color:#DDD;
    box-shadow:0.3px 0.3px 2.5px -0.6px #AAA, inset 0 0 6px #000, inset 0 2px 2px #000, inset 3px 0 2px #000, inset -2px 0 2px #000;
  }
  .play-model {
    margin:5px; position:relative; font-size:23px;
  }
  .play-model > span {
    width:88px; height:30px; bottom:38px; left:-33px; position:absolute; z-index:9; font-size:16px; line-height:29px; display:none;
    box-shadow:0 0 3px -1px #00d8ff, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }
  .play-model:hover > span {
    display:block;
  }

  .pointer {
    width:18px; height:18px; top:-4px; right:-8px; position:absolute; border-radius:50%; background:url(../../../../../static/images/default/slide-pointer.png) no-repeat; background-size:100% 100%;
  }
  .pointer:hover {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727, 0 0.5px 8px #2af1fc;
  }
  .volume-bar {
    width:138px; height:10px; margin:17px 0 0; float:right; background:#080808; border-radius:6px; cursor:pointer;
  }
  .volume-bar.ban-change {
    opacity:0.3;
    cursor:not-allowed
  }


  .play-list-cell {
    color:#888;
  }
  .play-list-cell:hover {
    background:#0B0B0B;
    color:#CCC;
  }
  .play-list-cell.active {
    background:#000;
    color:#EEE;
  }
  .play-list-cell > .play {
    margin:0 8px 0 4px; float:left;
    font-size:20px;
    opacity:0;
  }
  .play-list-cell:hover > .play, .play-list-cell.active > .play {
    opacity:1;
  }
  .play-list-cell.active > .play {
    color:#00d8ff;
  }
  .play-list-cell > .music-oper {
    display:none;
  }
  .play-list-cell:hover > .music-oper {
    display:inline-block;
  }

  div.cube-bg {
    color:#EEE;
  }
</style>