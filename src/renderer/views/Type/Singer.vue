<template>
  <div>

    <!-- 歌手信息 -->
    <div></div>

    <!-- 歌手内容切换 -->
    <div style="width:100%; height:32px; margin:28px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;">
      <span @click="changeContent('')" :class="{'active': type === ''}" class="singer-menu-cell">专辑</span>
      <span @click="changeContent('')" :class="{'active': type === ''}" class="singer-menu-cell">歌手详情</span>
      <span @click="changeContent('')" :class="{'active': type === ''}" class="singer-menu-cell">相似歌手</span>

      <div style="margin-top:10px; float:right;">
        <div @click="changePlayListShowType('picture')" :class="{'active' : plsyListShowType === 'picture-group'}" class="super-btn-out play-list-type" title="大图模式" >
          <i class="super-btn-in mh-if theme"></i>
        </div>
        <div @click="changePlayListShowType('list')" :class="{'active' : plsyListShowType === 'list-group'}" class="super-btn-out play-list-type" title="列表模式" >
          <i class="super-btn-in mh-if music-list"></i>
        </div>
        <div @click="changePlayListShowType('picture-list')" :class="{'active' : plsyListShowType === 'picture-list-group'}" class="super-btn-out play-list-type" title="图列模式" >
          <i class="super-btn-in mh-if list"></i>
        </div>
      </div>
    </div>

    <!-- 不同内容 -->
    <div style="margin:0 auto 28px;">
      <component :is="type"/>
    </div>

	</div>
</template>

<script>
import PictureGroup from '../../components/extends/PlayList/PictureGroup.vue'
import ListGroup from '../../components/extends/PlayList/ListGroup.vue'
import PictureListGroup from '../../components/extends/PlayList/PictureListGroup.vue'

export default {
  name: 'Singer',

  components: {
    PictureGroup, ListGroup, PictureListGroup
  },

  data () {
    return {
      type: '',
      playListShowType: 'picture-group'
    }
  },

  methods: {
    changePlayListShowType (type = 'picture') {
      this.playListShowType = type + '-group'
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