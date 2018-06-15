<template>
  <div style="padding:0 2%;">

    <!-- 歌手信息 -->
    <div style="width:96%; margin:28px auto 18px;">
      <div style="width:20%; height:100%; display:inline-block; text-align:center;">
        <img src="http://p3.music.126.net/Ic8mQm7XI1nxe8DL-O9Eog==/103354093028496.jpg?param=640y300" class="glass-bg box-show" style="width:128px; height:128px; margin-right:28px; padding:6px;"/>
      </div>
      <div style="width:80%; height:100%; float:right;">
        <p style="padding-top:8px; font-size:24px;">The Name of the Singer</p>
        <p style="line-height:3em;">
          <span style="margin-right:26px;">
            <i class="mh-if music-albu" style="margin-right:6px;"></i>单曲数：253
          </span>
          <span style="margin-right:26px;">
            <i class="mh-if redis" style="margin-right:6px;"></i>专辑数：63
          </span>
        </p>
        <div class="super-btn-out" style="width:108px; height:38px;">
          <span class="super-btn-in mh-if non-colloection" style="width:95px; height:25px; top:48%; font-size:21px; line-height:26px;"> 关注</span>
        </div>
      </div>
    </div>

    <!-- 歌手内容切换 -->
    <div style="width:100%; height:32px; margin:28px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;">
      <span @click="changeContent('play-list')" :class="{'active': type === 'play-list'}" class="singer-menu-cell">专辑</span>
      <span @click="changeContent('descript')" :class="{'active': type === 'descript'}" class="singer-menu-cell">歌手详情</span>
      <span @click="changeContent('similar-singer')" :class="{'active': type === 'similar-singer'}" class="singer-menu-cell">相似歌手</span>

      <div v-if="type === 'play-list'" style="height:100%; margin-top:-4px; float:right;">
        <div @click="changePlayListShowType('picture-group')" :class="{'active' : playListShowType === 'picture-group'}" class="super-btn-out play-list-type" title="大图模式" >
          <i class="super-btn-in mh-if theme"></i>
        </div>
        <div @click="changePlayListShowType('list-group')" :class="{'active' : playListShowType === 'list-group'}" class="super-btn-out play-list-type" title="列表模式" >
          <i class="super-btn-in mh-if music-list"></i>
        </div>
        <div @click="changePlayListShowType('picture-list-group')" :class="{'active' : playListShowType === 'picture-list-group'}" class="super-btn-out play-list-type" title="图列模式" >
          <i class="super-btn-in mh-if list"></i>
        </div>
      </div>
    </div>

    <!-- 不同内容 -->
    <div style="margin:0 auto 28px;">
      <component :is="type" :showType="playListShowType" />
    </div>

	</div>
</template>

<script>
  import PlayList from '../../components/extends/play-list/ShowPlayList.vue'
  import Descript from '../../components/base/descript/Descript.vue'
  import SimilarSinger from '../../components/extends/search/singer/SingerGroup.vue'
  import PictureGroup from '../../components/extends/play-list/picture/PictureGroup.vue'
  import ListGroup from '../../components/extends/play-list/list/ListGroup.vue'
  import PictureListGroup from '../../components/extends/play-list/picture-list/PictureListGroup.vue'

  export default {
    name: 'SingerPage',

    components: {
      PlayList, Descript, SimilarSinger, PictureGroup, ListGroup, PictureListGroup
    },

    data () {
      return {
        type: 'play-list',
        playListShowType: 'picture-group'
      }
    },

    methods: {
      changeContent (type) {
        this.type = type
      },

      changePlayListShowType (type = 'picture') {
        this.playListShowType = type
      }
    }
  }
</script>

<style scoped>
  .singer-menu-cell {
    margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
  }
  .singer-menu-cell:hover {
    color:#EEE;
  }
  .singer-menu-cell.active {
    border-bottom:2px solid #20dbfc; color:#20dbfc
  }

  .play-list-type {
    width:30px; height:30px;
  }
  .play-list-type > .super-btn-in {
    width:24px; height:24px; top:48%; font-size:19px; line-height:24px;
  }
  .play-list-type.active > .super-btn-in {
    top:50%;
  }
</style>