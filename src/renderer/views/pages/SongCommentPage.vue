<template>
  <div>

    <div style="width:93%; height:88px; margin:38px auto 48px;">

      <div style="width:88px; height:88px; margin-right:28px; position:relative; float:left;">
        <img src="http://p1.music.126.net/hLV2wmmIIMPG1Inyb-oTWg==/109951163281671401.jpg?param=140y140" class="box-show" style="width:100%; height:100%; padding:4px; background:#555;"/>
        <div @click="playThisSong" id="playSong" class="mh-if play"></div>
      </div>

      <p style="font-size:20px; line-height:2.5em; color:#DDD;">The Name of the Song</p>
      <p style="color:#999; line-height:2.3em;">
        <span>专辑：</span>
        <span>歌手：</span>
      </p>
    </div>
    
    <comment-total />
  </div>
</template>

<script>
import CommentTotal from '../../components/extends/comment/CommentTotal.vue'

export default {
  name: 'SongCommentPage',

  components: {
    CommentTotal
  },

  methods: {
    playThisSong () {
      console.log(666)
    }
  }
}
</script>

<style scoped>
  #playSong {
    width:100%; height:100%; top:0; left:0; position:absolute; background:rgba(0,0,0,0.6); z-index:5; font-size:68px; line-height:88px; text-align:center; color:#888; text-shadow:0 0 3px #111;
    transition:all 0.68s;
  }
  #playSong:hover {
    background:rgba(0,0,0,0.68); color: #00d8ff; text-shadow:5px 5px 2px #222;
  }
</style>