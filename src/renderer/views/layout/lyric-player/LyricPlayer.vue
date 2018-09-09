<template>
  <div class="box-show" style="width:953px; height:28px; right:0; bottom:45px; position:fixed; background:rgba(0,0,0,0.88);">
    <p style="width:100%; text-align:center; line-height:28px;">LyricPlayer</p>
  </div>
</template>

<script>
  export default {
    name: 'LyricPlayer',

    data () {
      return {
        songLyric: {}
      }
    },

    beforeCreate () {
      this.$http.get('http://music.jesbrian.local/resource/lyric/test.json').then(result => {
        this.songLyric = result.data
        this.songLyric.nowLyricIndex = 0
      }).catch(error => {
        console.log(error)
      })
    },

    methods: {
    }
  }
</script>

<style scoped>

</style>