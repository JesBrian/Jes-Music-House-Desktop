<template>
  <div style="height:688px;">

    <div style="width:238px; height:30px; margin:0 auto; text-align:center; line-height:26px;">
      <div @click="changeContentType('song')" :class="contentType === 'song' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; padding-top:0.6px; float:left; border-radius:28px 0 0 28px; cursor:pointer;">
        <span>新歌速递</span>
      </div>
      <div @click="changeContentType('disc')" :class="contentType === 'disc' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; padding-top:0.6px; float:right; border-radius:0 28px 28px 0; cursor:pointer;">
        <span>新碟上架</span>
      </div>
    </div>

    <div style="width:92%; margin:8px auto 0; padding:28px 18px 6px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; font-size:14px; text-shadow:1px 1px 1px #000;">
      <span @click="changeLanguageType('all')" :class="languageType === 'all' ? 'active' : ''" class="language-type">全部</span>
      <span @click="changeLanguageType('chinese')" :class="languageType === 'chinese' ? 'active' : ''" class="language-type">华语</span>
      <span @click="changeLanguageType('west')" :class="languageType === 'west' ? 'active' : ''" class="language-type">欧美</span>
      <span @click="changeLanguageType('japan')" :class="languageType === 'japan' ? 'active' : ''" class="language-type">韩国</span>
      <span @click="changeLanguageType('korea')" :class="languageType === 'korea' ? 'active' : ''" class="language-type">日本</span>
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