<template>
  <div style="padding-bottom:28px;">

    <div style="width:238px; height:30px; margin:0 auto; text-align:center; line-height:26px;">
      <div @click="changeContentType('song')" :class="contentType === 'song' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; padding-top:0.6px; float:left; border-radius:28px 0 0 28px; cursor:pointer;">
        <span>新歌速递</span>
      </div>
      <div @click="changeContentType('disc')" :class="contentType === 'disc' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; padding-top:0.6px; float:right; border-radius:0 28px 28px 0; cursor:pointer;">
        <span>新碟上架</span>
      </div>
    </div>

    <div style="width:92%; margin:8px auto 0; padding:28px 18px 6px; box-sizing:border-box; font-size:14px; text-shadow:1px 1px 1px #000;">
      <span @click="changeLanguageType('all')" :class="languageType === 'all' ? 'active' : ''" class="language-type">全部</span>
      <span @click="changeLanguageType('chinese')" :class="languageType === 'chinese' ? 'active' : ''" class="language-type">华语</span>
      <span @click="changeLanguageType('west')" :class="languageType === 'west' ? 'active' : ''" class="language-type">欧美</span>
      <span @click="changeLanguageType('japan')" :class="languageType === 'japan' ? 'active' : ''" class="language-type">韩国</span>
      <span @click="changeLanguageType('korea')" :class="languageType === 'korea' ? 'active' : ''" class="language-type">日本</span>

      <div style="margin-top:-13px; float:right;">
        <div class="super-btn-out" style="width:100px; height:28px; margin-left:18px;">
          <span class="super-btn-in mh-if play" style="width:92px; height:21px; line-height:21px;"> 播放全部</span>
        </div>
        <div class="super-btn-out" style="width:100px; height:28px; margin-left:18px;">
          <span class="super-btn-in mh-if collection-music" style="width:92px; height:21px; line-height:21px;"> 收藏全部</span>
        </div>
      </div>
    </div>

    <div class="glass-bg box-show" style="width:92%; margin:3px auto;">
      <div v-for="n in 100" class="box-shadow" style="width:100%; height:48px; line-height:48px;">
        <p style="width:4%; height:100%; float:left; text-align:right;">{{ n }}</p>
        <p style="width:8%; height:100%; float:left;">
          <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:32px; height:32px; margin:8px auto; display:block;"/>
        </p>
        <p style="width:38%; height:100%; float:left; text-align:left;">{{ n }}</p>
        <p style="width:18%; height:100%; float:left; text-align:left;">{{ n }}</p>
        <p style="width:25%; height:100%; float:left; text-align:left;">{{ n }}</p>
        <p style="width:6%; height:100%; float:left; text-align:center;">00:00</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'IndexNewsMusic',

    data () {
      return {
        contentType: 'song',
        languageType: 'all'
      }
    },

    methods: {
      changeContentType (type) {
        this.contentType = type
      },
      changeLanguageType (type) {
        this.languageType = type
      }
    }
  }
</script>

<style scoped>
  .cube-bg.box-show {
    color:#EEE;
    line-height:27px;
  }

  .language-type {
    margin-right:23px; padding:0 13px 5px 14px; cursor:pointer;
  }
  .language-type.active {
    border-bottom:3px solid #00d8ff; color:#00d8ff;
  }
</style>