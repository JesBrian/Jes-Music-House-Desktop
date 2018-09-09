<template>
  <div class="box-show" style="width:953px; height:28px; right:0; bottom:45px; position:fixed; background:rgba(0,0,0,0.88);">
    <p v-if="songLyric !== null" style="width:100%; text-align:center; line-height:28px;">
      {{ songLyric.lyric[songLyric.nowLyricIndex].text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'LyricPlayer',

    data () {
      return {
        lyricTimer: null,
        songLyric: null
      }
    },

    watch: {
      playStatus () {
        this.setLyricTimer()
      }
    },

    computed: {
      playStatus () {
        return this.$store.state.Music.playStatus
      }
    },

    beforeCreate () {
      this.$http.get('http://music.jesbrian.local/resource/lyric/test.json').then(result => {
        this.songLyric = result.data
        this.songLyric.nowLyricIndex = 0
        console.log(this.songLyric)
      }).catch(error => {
        console.log(error)
      })
    },

    methods: {
      setLyricTimer () {
        if (this.$store.state.Music.playStatus) {
          this.lyricTimer = setInterval(() => {
            console.log(this.$store.state.Music.musicSource.currentTime)
            this.setNowLyricIndex()
          }, 288)
        } else if (this.lyricTimer !== null) {
          clearInterval(this.lyricTimer)
        }
      },

      setNowLyricIndex () {
        console.log(this.songLyric)
      }
    }
  }
</script>

<style scoped>

</style>