<template>
  <div style="background:#262626; padding-top:28px;">
    <!-- 主页菜单 -->
    <div style="width:92%; height:38px; margin:0 auto 28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; text-align:center;">
      <div style="width:100%; height:28px; padding-top:10px; line-height:24px; color:#BBB; font-size:18px; font-weight:700; text-shadow:1px 1px 0.5px #000;">
        <span @click="changeIndexContent('recommend')" :class="{'active': indexContentType === 'recommend'}" class="index-menu-cell">推荐</span>
        <span @click="changeIndexContent('play-list')" :class="{'active': indexContentType === 'play-list'}" class="index-menu-cell">歌单</span>
        <span @click="changeIndexContent('singer')" :class="{'active': indexContentType === 'singer'}" class="index-menu-cell">歌手</span>
        <span @click="changeIndexContent('news-music')" :class="{'active': indexContentType === 'news-music'}" class="index-menu-cell">最新音乐</span>
      </div>
    </div>

    <!-- 内容 -->
    <component :is="'index-' + indexContentType" />

  </div>
</template>

<script>
import IndexRecommend from '../../components/extends/index-content/recommend/IndexRecommend.vue'
import IndexNewsMusic from '../../components/extends/index-content/news-music/IndexNewsMusic.vue'
import IndexPlayList from '../../components/extends/index-content/play-list/IndexPlayList.vue'
import IndexSinger from '../../components/extends/index-content/singer/IndexSinger.vue'

import { changePage } from '../../assets/js/commom.js'

export default {
  name: 'IndexPage',

  components: {
    IndexSinger, IndexPlayList, IndexNewsMusic, IndexRecommend
  },

  data () {
    return {
    }
  },

  computed: {
    indexContentType () {
      return this.$route.params.type
    }
  },

  methods: {
    changeIndexContent (type = 'recommend') {
      changePage('/index/' + type, this)
    }
  }
}
</script>

<style scoped>
	.index-menu-cell {
		margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
	}
	.index-menu-cell:hover {
		color:#EEE;
	}
	.index-menu-cell.active {
		border-bottom:2px solid #20dbfc; color:#20dbfc
	}
</style>