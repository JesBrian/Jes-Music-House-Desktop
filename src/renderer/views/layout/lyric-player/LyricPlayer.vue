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
        this.$set(this.songLyric, 'nowLyricIndex', 0)
        this.$set(this.songLyric, 'lyricTotal', result.data.lyric.length)
      }).catch(error => {
        console.log(error)
      })
    },

    methods: {
      setLyricTimer () {
        if (this.$store.state.Music.playStatus) {
          this.lyricTimer = setInterval(() => {
            this.setNowLyricIndex(this.$store.state.Music.musicSource.currentTime)
          }, 500)
        } else if (this.lyricTimer !== null) {
          clearInterval(this.lyricTimer)
        }
      },

      setNowLyricIndex (timestamp) {
        for (let i = this.songLyric.nowLyricIndex + 1; i < this.songLyric.lyricTotal; i++) {
          if (timestamp > this.songLyric.lyric[i].timestamp) {
            this.songLyric.nowLyricIndex = i
            continue
          }
          break
        }
      }
    }
  }
</script>

<style scoped>

</style>