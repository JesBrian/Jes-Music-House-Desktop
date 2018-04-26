<template>
  <div style="width:368px;">
    <slot />

    <div class="glass-bg box-show" style="width:93%; height:38px; margin:12px auto; text-align:center;">
      <img v-lazy="require('../../../../../static/images/icon/cube.png')" style="width:23px; height:23px; margin-top:6px; position:absolute;"/>
      <span style="margin-left:33px; line-height:38px; font-size:22px; font-weight:700; color:#BBB;">添加到歌单</span>
    </div>

    <div style="width:93%; max-height:268px; margin:3px auto 12px; overflow:auto; cursor:pointer;">
      <ul class="glass-bg" style="width:100%;">
        <li class="box-shadow" style="padding:1px;">
          <div @click="NewAlbum" style="height:52px;">
            <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:36px; margin:8px 13px 0 8px; padding:1.5px; float:left;" />
            <p style="padding-top:16px; color:#BBB; font-size:22px;">新建歌单</p>
          </div>
        </li>
        <li v-for="n in 8" class="box-shadow" style="padding:1px;">
          <div style="height:52px;">
            <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:36px; margin:8px 13px 0 8px; padding:1.5px; float:left;" />
            <p style="padding-top:8px; color:#CCC;">JesBrian</p>
            <p style="line-height:1.8em; font-size:14.5px; color:#AAA;">共 1222 首音乐</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AddAlbum',

  methods: {
    NewAlbum () {
      this.$store.commit('CHANGE_MODAL_TYPE', 'NewAlbum')
    }
  }
}
</script>

<style scoped>

  ::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #333;
    border-radius:8px;
  }
  ::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background:linear-gradient(to right, rgba(0, 126, 240, 0.5), rgba(0, 216, 255, 0.5), rgba(0, 216, 255, 0.5));
    -webkit-border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:vertical:hover {
    background:linear-gradient(to right, #007ef0, #00d8ff, #00d8ff);
  }
</style>