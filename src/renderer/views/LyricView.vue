<template>
	<div style="width:100%; height:108px; padding:5px; box-sizing:border-box; overflow:auto;">
      <div style="width:100%; height:100%; box-sizing:border-box; background:rgba(0, 0, 0, 0.18); box-shadow:0 0 4px #CCC, inset 0 0 1px #DDD, inset 0 0 1px #000; -webkit-app-region:drag;">
        <div style="width:100%; height:38px; line-height:38px; text-align:center;">
          <i class="mh-if music-list"></i>
          <i @click="changeMainStatus('prev')" class="mh-if double-arrow-left"></i>
          <i @click="changeMainStatus('play')" :class="playStatus === true ? 'stop' : 'play'" class="mh-if"></i>
          <i @click="changeMainStatus('next')" class="mh-if double-arrow-right"></i>
          <i class="mh-if gear"></i>
          <i class="mh-if lock"></i>
          <i @click="changeMainStatus('volume')" :class="volumeStatus === true ? 'volume-on' : 'volume-off'" class="mh-if"></i>
          <i @click="closeLyricView" class="mh-if close"></i>
        </div>
        <p style="font-size:36px; line-height:45px; text-align:center; -webkit-text-stroke:0.5px red;">666 {{ playStatus }}</p>
      </div>
	</div>
</template>

<script>
  export default {
    name: 'LyricView',

    components: {},

    data () {
      return {
        mainViewId: -1,
        playStatus: false,
        volumeStatus: true
      }
    },

    watch: {
    },

    created () {
      this.$ipcRenderer.send('init-lyric-status')

      this.$ipcRenderer.on('init-lyric-status', (event, initStatusObj) => {
        // [this.mainViewId, this.playStatus, this.volumeStatus] = [...initStatusObj]
        this.mainViewId = initStatusObj.mainViewId
        this.playStatus = initStatusObj.playStatus
        this.volumeStatus = initStatusObj.volumeStatus
      })

      this.$ipcRenderer.on('change-lyric-status', (event, statusObj) => {
        this[statusObj.name] = statusObj.value
      })
    },

    computed: {
    },

    methods: {
      closeLyricView () {
        this.$ipcRenderer.send('close-lyric-view-notice')
      },

      changeMainStatus (status) {
        this.$ipcRenderer.sendTo(this.mainViewId, 'change-main-status', status)
      }
    }
  }
</script>

<style scoped>
  .mh-if {
    margin:0 8px; font-size:18px; color:#DDD; text-shadow:1px 1px 2px #000; -webkit-app-region:no-drag;
  }
  .mh-if:hover {
    color:#FFF;
  }
  .mh-if:active {
    color: #20dbfc;
  }
</style>