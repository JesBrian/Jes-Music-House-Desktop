<template>
	<div>
		<div style="width:95%; height:428px; margin:0 auto 58px;">

      <div style="width:36%; height:100%; float:left; position:relative;">
        <div style="width:100%; height:280px; margin:68px 0 28px; box-sizing:border-box;">
          <div style="width:288px; height:285px; margin:0 auto; position:relative; background:url(../../../../static/images/default/disk.png) no-repeat; background-size:100% 100%; border-radius:50%;">
            <img :class="{'active' : $store.state.Music.playStatus}" v-lazy="'http://p1.music.126.net/Qgrn5ptCMLdd9MAngNWURA==/17868163463382870.jpg?param=130y130'" class="glass-bg disk-bg" />
          </div>
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

      <div style="width:62%; float:right; ">
        <div style="width:92%; margin:18px auto 0; color:#DDD;">
          <p style="font-size:22px;">The Name of the Song</p>
          <p style="line-height:1.6em; font-size:15px;">sdvsdvsdbdfbhusibhfdbukvsodvsdvsdrhukvfsdbhifsdvbuigesdd</p>
        </div>
        <div style="width:100%; height:388px; padding:38px 52px 38px 68px; box-sizing:border-box; background:url(../../../../static/images/default/lyric-bg.png) no-repeat; background-size:100% 100%;">
          <div style="width:100%; height:100%; overflow:auto;">
            <div style="width:100%; height:1888px; background:lightgreen"></div>
          </div>
        </div>
      </div>
    </div>
    <div style="width:92%; margin:0 auto 28px;">
      <div style="width:72%; height:100%; padding:0 48px 0 5px; box-sizing:border-box; display:inline-block; position:relative;">
        <div style="width:93%; height:53px; top:-50px; left:0; margin:0 auto; padding:0 28px; position:absolute; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
          <i class="mh-if music-box" style="margin-right:6px; font-size:23px; color:#00d8ff;"></i>
          <span style="margin-right:3px; font-size:23px; font-weight:700; color:#CCC;">听友评论</span>
          <span style="color:#BBB;">（已有 6946 条评论）</span>
        </div>
        <div style="margin:18px 0;">
          <div class="glass-bg box-show" style="width:100%; height:108px; position:relative; border-radius:0;">
            <label><textarea class="cube-bg box-show glow-input" style="width:97%; height:82%; top:50%; left:50%; position:absolute; transform:translate(-50%, -50%); resize:none;"></textarea></label>          </div>
          <div style="height:50px; margin-left:18px; line-height:50px;">
            <i class="mh-if exciting" style="float:left; color:#DDD;"></i>
            <div class="super-btn-out" style="width:108px; height:30px; margin:8px 18px; float:right;">
              <span class="super-btn-in mh-if comment" style="width:100px; height:22px; line-height:24px;"> 发表评论</span>
            </div>
            <span style="float:right; color:#AAA;">138</span>
          </div>
        </div>
        <div style="width:100%;">
          <div style="height:53px; margin:0 auto; padding:0 23px; box-sizing:border-box; box-shadow:0 3px 3px -3px #999; line-height:68px; text-shadow:1px 1px 0.5px #000;">
            <span style="font-size:16px; color:#CCC;">精彩评论</span>
          </div>
          <div style="height:53px; margin:0 auto; padding:0 23px; box-sizing:border-box; box-shadow:0 3px 3px -3px #999; line-height:68px; text-shadow:1px 1px 0.5px #000;">
            <span style="font-size:16px; color:#CCC;">最新评论</span>
          </div>
        </div>
      </div>
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
    width:108px; top:43px; left:-3px; display:inline-block; position:absolute;
    transform-origin:12.8px 12.8px;
    transform:rotate(-12deg);
    -webkit-transition: transform 0.38s;
  }
  #playPointer.active {
    transform:rotate(-46deg);
  }

  .disk-bg {
    width:70%; height:70%; margin:40px 45px; border-radius:50%;
    display:inline-block;
  }
  .disk-bg.active {
    animation: goCircle 18s infinite linear; /*匀速 循环*/
  }
  @keyframes goCircle {
    0% {
      transform:rotate(0deg);
    }

    100% {
      transform:rotate(360deg);
    }
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