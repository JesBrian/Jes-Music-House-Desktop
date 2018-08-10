<template>
	<div style="width:100%; height:100%; box-sizing:border-box; overflow:auto;">
		<div style="width:95%; height:468px; margin:0 auto 68px; position:relative;">

      <div @click="goBackView" class="super-btn-out" style="width:38px; height:38px; top:16px; right:8px; position:absolute;">
        <i class="super-btn-in mh-if lessen" style="width:30px; height:30px; font-size:26px; line-height:32px;"></i>
      </div>

      <div style="width:40%; height:100%; float:left; position:relative;">
        <div style="width:100%; margin:38px 0 28px; box-sizing:border-box;">
          <div class="box-show" style="width:320px; height:320px; left:-8px; margin:12px 28px; display:inline-block; border-radius:50%;">
            <div :style="{'transform' : 'rotate(' + nowPlayTime / 4 % 360 + 'deg)'}" class="disk-bg">
              <img v-lazy="'http://p1.music.126.net/Qgrn5ptCMLdd9MAngNWURA==/17868163463382870.jpg?param=130y130'" class="glass-bg play-list-img" />
            </div>
          </div>
        </div>
        <div :class="{'active' : !$store.state.Music.playStatus}" id="playPointer">
          <img src="../../../static/images/default/Neo-Player.png" style="width:100%;"/>
        </div>
        <div style="width:88%; text-align:center;">
          <div class="super-btn-out" style="width:68px; height:29px; margin:10px 8px 0;">
            <span class="super-btn-in mh-if non-colloection" style="width:60px; height:20px; line-height:21px;"> 喜欢</span>
          </div>
          <div @click="showModal('AddAlbum')" class="super-btn-out" style="width:68px; height:29px; margin:10px 8px 0;">
            <span class="super-btn-in mh-if collection-music" style="width:60px; height:20px; line-height:21px;"> 收藏</span>
          </div>
          <div class="super-btn-out" style="width:68px; height:29px; margin:10px 8px 0;">
            <span class="super-btn-in mh-if download" style="width:60px; height:20px; line-height:21px;"> 下载</span>
          </div>
          <div @click="showModal('Share')" class="super-btn-out" style="width:68px; height:29px; margin:10px 8px 0;">
            <span class="super-btn-in mh-if share" style="width:60px; height:20px; line-height:21px;"> 分享</span>
          </div>
        </div>
      </div>

      <div style="width:58%; margin-right:18px; float:right; ">
        <div style="width:92%; margin:18px auto 0; color:#DDD;">
          <p style="font-size:22px;">The Name of the Song</p>
          <p style="line-height:1.6em; font-size:15px;">sdvsdvsdbdfbhusibhfdbukvsodvsdvsdrhukvfsdbhifsdvbuigesdd</p>
        </div>
        <div class="lyrics-content">
          <div style="width:100%; height:100%; overflow:auto;">
            <div style="width:100%; height:1888px;"></div>
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

        <comment-total style="margin-left:-12px; padding:0;" />

      </div>

      <div style="width:28%; float:right;">
        <div style="width:100%; margin-bottom:48px;">
          <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:21px;">包含这首歌曲的歌单</div>
          <div v-for="n in 3" class="box-show" style="width:100%; height:50px; margin-bottom:8px; border-radius:3px;">
            <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:35px; height:35px; margin:8px; padding:2px; float:left;"/>
            <div>
              <p class="text-hidden" style="padding:9px 0 4px;">JesBrian</p>
              <p style="font-size:13px;">播放：666888</p>
            </div>
          </div>
        </div>
        <div style="width:100%; margin-bottom:48px;">
          <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:21px;">相似的歌曲</div>
          <div v-for="n in 5" class="box-show" style="width:100%; height:50px; margin-bottom:8px; border-radius:3px;">
            <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:35px; height:35px; margin:8px; padding:2px; float:left;"/>
            <div>
              <p class="text-hidden" style="padding:9px 0 4px;">The Name of the Song</p>
              <p style="font-size:13px;">JesBrian</p>
            </div>
          </div>
        </div>
        <div style="width:100%; margin-bottom:48px;">
          <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:21px;">喜欢这首歌的人</div>
          <div v-for="n in 5" class="box-show" style="width:100%; height:50px; margin-bottom:8px; border-radius:3px; line-height:50px;">
            <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:35px; height:35px; margin:8px; padding:2px; float:left;"/>
            Jesbrian
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import CommentTotal from '../components/extends/comment/CommentTotal.vue'

  export default {
    name: 'SongView',

    components: {
      CommentTotal
    },

    data () {
      return {
        nowPlayTime: 0,
        timer: null
      }
    },

    watch: {
      playStatus () {
        this.setRoateTimer()
      }
    },

    mounted () {
      this.setRoateTimer()
    },

    computed: {
      playStatus () {
        return this.$store.state.Music.playStatus
      }
    },

    methods: {
      showModal (type = '') {
        this.$store.commit('CHANGE_MODAL_TYPE', type)
      },

      goBackView () {
        this.$root.eventHub.$emit('closeCloverComponent')
        this.$store.commit('CLOSE_MUSIC_VIEW')
      },

      setRoateTimer () {
        if (this.$store.state.Music.playStatus) {
          this.timer = setInterval(() => {
            this.nowPlayTime++
          }, 38)
        } else if (this.timer !== null) {
          clearInterval(this.timer)
        }
      }
    }
  }
</script>

<style scoped>
  #playPointer {
    width:138px; top:8px; left:-23px; display:inline-block; position:absolute;
    transform-origin:12.8px 12.8px;
    transform:rotate(-13deg);
    transition:transform 0.28s;
  }
  #playPointer.active {
    transform:rotate(-38deg);
  }

  .play-list-img {
    width:63%; height:63%; top:50%; left:50%; position:absolute; border-radius:50%; transform:translate(-50%, -50%);
  }
  .disk-bg {
    width:100%; height:100%; position:relative; background:url(../../../static/images/default/disk.png) no-repeat; background-size:100% 100%; border-radius:50%;
  }

  .lyrics-content {
    width:100%; height:438px; padding:45px 78px; box-sizing:border-box; background:url(../../../static/images/default/lyric-bg.png) no-repeat; background-size:100% 100%;
  }
</style>