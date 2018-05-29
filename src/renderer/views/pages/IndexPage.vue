<template>
  <div style="background:#262626; padding-top:28px;">
    <!-- 主页菜单 -->
    <div style="width:92%; height:38px; margin:0 auto 28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; text-align:center;">
      <div style="width:100%; height:28px; padding-top:10px; line-height:24px; color:#BBB; font-size:18px; font-weight:700; text-shadow:1px 1px 0.5px #000;">
        <span @click="changeIndexContent('recommend')" :class="{'active': this.type === 'recommend'}" class="index-menu-cell">推荐</span>
        <span @click="changeIndexContent('play-list')" :class="{'active': this.type === 'play-list'}" class="index-menu-cell">歌单</span>
        <span @click="changeIndexContent('rank')" :class="{'active': this.type === 'rank'}" class="index-menu-cell">排行榜</span>
        <span @click="changeIndexContent('singer')" :class="{'active': this.type === 'singer'}" class="index-menu-cell">歌手</span>
        <span @click="changeIndexContent('disc')" :class="{'active': this.type === 'disc'}" class="index-menu-cell">新碟上架</span>
      </div>
    </div>

    <!-- 内容 -->
    <component :is="'index-' + type" />

  </div>
</template>

<script>
import IndexRecommend from '../../components/extends/index-content/recommend/IndexRecommend.vue'
import IndexDisc from '../../components/extends/index-content/disc/IndexDisc.vue'
import IndexPlayList from '../../components/extends/index-content/play-list/IndexPlayList.vue'
import IndexRank from '../../components/extends/index-content/rank/IndexRank.vue'
import IndexSinger from '../../components/extends/index-content/singer/IndexSinger.vue'

export default {
  name: 'IndexPage',

  components: {
    IndexSinger, IndexRank, IndexPlayList, IndexDisc, IndexRecommend
  },

  data () {
    return {
      type: 'recommend'
    }
  },

  methods: {
    changeIndexContent (type = 'recommend') {
      this.type = type
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