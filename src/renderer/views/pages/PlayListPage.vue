<template>
  <div>
    <!-- 歌单基本信息 -->
    <div style="width:100%; margin-top:28px;">
      <div style="width:32%; margin-top:12px; float:left; text-align:center;">
        <img class="cube-bg box-show" v-lazy="'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'" style="width:188px; height:188px; padding:8px; border-radius:6px;"/>
      </div>
      <div style="width:65%; margin-top:3px; display:inline-block; position:relative; color:#999;">
        <p style="font-size:23px; color:#EEE;">史克威尔艾尼克斯 · 游戏音乐编年史 ♪</p>
        <div style="height:32px; margin-top:18px; display:inline-block; line-height:32px;">

          <page-link url="/singer" style="width:26px; height:26px; margin:3px 12px 0 0; float:left; border-radius:50%;">
            <img @click="changeRouter('/user')" class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:100%; height:100%; padding:1px; border-radius:50%;"/>
          </page-link>
          <span @click="changeRouter('/user')" style="margin-right:38px; font-size:20px;">JesBrian</span>

          <span style="font-size:13.5px;">2018-09-23 创建</span>

          <div style="top:0; right:0; position:absolute; text-align:right; line-height:1.2em; color:#AAA; font-size:13.5px;">
            歌曲数<br/>106
          </div>
        </div>

        <div style="margin:18px 0;">
          <div class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if play" style="width:64px; height:20px; line-height:21px;"> 播放</span>
          </div>
          <div class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if play" style="width:64px; height:20px; line-height:21px;"> 列表</span>
          </div>
          <div @click="showModal('AddAlbum')" class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if collection-music" style="width:64px; height:20px; line-height:21px;"> 收藏</span>
          </div>
          <div class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if download" style="width:64px; height:20px; line-height:21px;"> 下载</span>
          </div>
          <div @click="showModal('Share')" class="super-btn-out" style="width:72px; height:29px; margin:10px 18px 0 0;">
            <span class="super-btn-in mh-if share" style="width:64px; height:20px; line-height:21px;"> 分享</span>
          </div>
        </div>

        <div style="position:relative; letter-spacing:1px; font-size:14px;">
          <p style="margin-bottom:8px;">
            <span style="color:#DDD;">标签：</span>
            <page-link :url="'/index/play-list'" style="color:#00d8ff;">666</page-link>
            <i style="margin:0 3px; color:#FFF;">/</i>
            <page-link :url="'/index/play-list'" style="color:#00d8ff;">888</page-link>
            <i style="margin:0 3px; color:#FFF;">/</i>
            <page-link :url="'/index/play-list'" style="color:#00d8ff;">999</page-link>
          </p>
          <p ref="playListDescript" :style="isShowDescript ? 'height:100%;' : 'height:38px;'" style="width:92%; word-break:break-all; line-height:19px; overflow:hidden;">
            <span style="color:#DDD;">简介：</span>
            wsedjnm'fgvh测试jnkml,ws恐怕edjn4515gvhjnk486djnm相差谁vhjnkml,wsed场设jnm'fgvh4156jnkml,w现备和健康sedjnm'fgvhjnkml513vjv处理vhjnk产量数52edjnm急哦fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml
          </p>
          <i v-if="isShowReadMoreDescriptBtn" @click="isShowDescript = !isShowDescript" :class="['mh-if', isShowDescript ? 'double-arrow-up' : 'double-arrow-down']" style="top:33px; right:8px; position:absolute;"></i>
        </div>
      </div>
    </div>

    <!-- 歌单内容切换 -->
    <div style="width:100%; height:32px; margin:32px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;">
      <span @click="changeContent('SongGroup')" :class="{'active': type === 'SongGroup'}" class="play-list-menu-cell">歌曲列表</span>
      <span @click="changeContent('CommentTotal')" :class="{'active': type === 'CommentTotal'}" class="play-list-menu-cell">评论 [666]</span>
      <label v-if="type === 'SongGroup'" class="super-btn-out active" style="width:268px; height:32px; margin:-2px 8px 0 0; float:right; position:relative; border:none; border-radius:16px;">
        <input type="text" class="super-btn-in" placeholder="搜索本歌单音乐" style="width:258px; height:76%; top:50%; padding:0 12px; box-sizing:border-box; border-radius:12px; text-align:left; font-size:17px;"/>
        <i class="mh-if search" style="top:2px; right:14px; position:absolute;"></i>
      </label>
    </div>

    <!-- 歌单内容 [ 歌曲列表/评论 ] -->
    <div style="margin:0 auto 28px;">
      <component :is="type"/>
    </div>

  </div>
</template>

<script>
  import SongGroup from '../../components/extends/song/SongGroup.vue'
  import CommentTotal from '../../components/extends/comment/CommentTotal.vue'

  export default {
    name: 'PlayListPage',

    components: {
      SongGroup, CommentTotal
    },

    data () {
      return {
        isShowReadMoreDescriptBtn: false,
        isShowDescript: false,
        type: 'SongGroup'
      }
    },

    mounted () {
      if (this.$refs['playListDescript'].scrollHeight > this.$refs['playListDescript'].clientHeight) {
        this.isShowReadMoreDescriptBtn = true
      }
    },

    methods: {
      changeContent (type = 'playList') {
        this.type = type
      }
    }
  }
</script>

<style scoped>

  .play-list-menu-cell {
    margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
  }
  .play-list-menu-cell:hover {
    color:#EEE;
  }
  .play-list-menu-cell.active {
    border-bottom:2px solid #20dbfc; color:#20dbfc
  }

</style>