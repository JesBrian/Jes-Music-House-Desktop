<template>
	<div>
		<div style="width:92%; height:428px; margin:0 auto 58px;">

      <div style="width:36%; height:100%; float:left; position:relative;">
        <div style="width:100%; height:280px; margin:68px 0 28px; box-sizing:border-box;">
          <div class="glass-bg box-show" style="width:288px; height:280px; margin:0 auto; border-radius:50%;"></div>
        </div>
        <div :class="{'active' : !$store.state.Music.playStatus}" id="playPointer">
          <img src="../../../../static/images/default/Neo-Player.png" style="width:100%;"/>
        </div>
        <div style="width:100%; text-align:center;">
          <div class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if non-colloection" style="width:60px; height:20px; line-height:21px;"> 喜欢</span>
          </div>
          <div @click="showModal('AddAlbum')" class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if collection-music" style="width:60px; height:20px; line-height:21px;"> 收藏</span>
          </div>
          <div class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if download" style="width:60px; height:20px; line-height:21px;"> 下载</span>
          </div>
          <div @click="showModal('Share')" class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if share" style="width:60px; height:20px; line-height:21px;"> 分享</span>
          </div>
        </div>
      </div>

      <div style="width:64%; float:left; ">
        <div style="width:100%; height:68px; background:lightseagreen"></div>
        <div style="width:100%; height:388px; padding:52px; box-sizing:border-box; background:url(../../../../static/images/default/lyric-bg.png) no-repeat; background-size:100% 100%;">
          <div style="width:100%; height:100%; overflow:auto;">
            <div style="width:100%; height:1888px; background:lightgreen"></div>
          </div>
        </div>
      </div>
    </div>
    <div style="width:92%; height:688px; background:lightgreen; margin:0 auto 28px;">
      <div style="width:72%; height:100%; display:inline-block; background:lightpink;"></div>
      <div style="width:28%; float:right; background:lightseagreen;">
        <div style="width:100%; height:288px; margin-bottom:28px; background:lightskyblue;"></div>
        <div style="width:100%; height:288px; margin-bottom:28px; background:lightskyblue;"></div>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Song',

  components: {},

  methods: {
    showModal (type = '') {
      this.$store.commit('CHANGE_MODAL_TYPE', type)
    }
  }
}
</script>

<style scoped>
  #playPointer {
    width:108px; top:38px; left:-18px; display:inline-block; position:absolute;
    transform-origin:12.8px 12.8px;
    transform:rotate(-12deg);
    -webkit-transition: transform 0.38s;
  }
  #playPointer.active {
    transform:rotate(-46deg);
  }


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