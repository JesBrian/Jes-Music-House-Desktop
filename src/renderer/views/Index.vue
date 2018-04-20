<template>
	<layout>
		<div style="width:92%; height:38px; margin:0 auto 28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF;text-align:center;">
			<div style="width:100%; height:28px; padding-top:10px; line-height:24px; color:#AAA; font-size:18px; font-weight:700;">
				<span @click="changeIndexContent('index')" :class="{'active': this.type === 'index'}" class="index-menu-cell">个性推荐</span>
				<span @click="changeIndexContent('album')" :class="{'active': this.type === 'album'}" class="index-menu-cell">歌单</span>
				<span @click="changeIndexContent('rank')" :class="{'active': this.type === 'rank'}" class="index-menu-cell">排行榜</span>
				<span @click="changeIndexContent('singer')" :class="{'active': this.type === 'singer'}" class="index-menu-cell">歌手</span>
				<span @click="changeIndexContent('newMusic')" :class="{'active': this.type === 'newMusic'}" class="index-menu-cell">最新音乐</span>
			</div>
		</div>
		<div style="width:73%; height:288px; margin:0 auto;">
			<slide-box />
		</div>
    <div style="width:92%; height:666px;"></div>
	</layout>
</template>

<script>
import Layout from '../components/Layout/Layout.vue'
import SlideBox from '../components/SlideBox/SlideBox.vue'

export default {
  name: 'Index',

  components: {SlideBox, Layout},

  data () {
    return {
      type: 'index'
    }
  },

  methods: {
    changeIndexContent (type = 'index') {
      this.type = type
    }
  }
}
</script>

<style scoped>
	.index-menu-cell {
		margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
	}
	.index-menu-cell.active {
		border-bottom:2px solid #20dbfc; color:#20dbfc
	}
</style>