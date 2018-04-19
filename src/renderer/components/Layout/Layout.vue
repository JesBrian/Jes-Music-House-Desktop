<template>
	<div>
		<!-- 顶部菜单 -->
		<top-menu />

		<!-- 左侧菜单 -->
		<left-menu />

		<div style="width:100%; height:638px; padding:58px 5px 50px 193px; box-sizing:border-box; background:#262626;">
			<div style="width:100%; height:100%; padding-top:28px; box-sizing:border-box; overflow:auto;">
				<slot />
			</div>
		</div>

		<!-- 音乐播放器 -->
		<music-player />
	</div>
</template>

<script>
import TopMenu from '../TopMenu/TopMenu.vue'
import MusicPlayer from '../MusicPlayer/MusicPlayer.vue'
import LeftMenu from '../LeftMenu/LeftMenu.vue'

export default {
  name: 'Layout',

  components: {LeftMenu, MusicPlayer, TopMenu}
}
</script>

<style scoped>
	::-webkit-scrollbar {
		width: 10px;
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