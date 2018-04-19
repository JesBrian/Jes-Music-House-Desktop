<template>
	<div class="glass-bg box-show" style="-webkit-app-region:drag; width:100%; height:54px; top:0; left:0; position:fixed; z-index:9; border-radius:0;">
		<!-- LOGO -->
		<div style="width:188px; height:100%; float:left;">
			<router-link to="/" style="-webkit-app-region:no-drag; float:left;">
				<img src="../../../../static/images/Logo.png" style="width:30px; height:30px; margin:10px 12px 0; float:left;"/>
				<span style="font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff; line-height:52px;">Music House</span>
			</router-link>
		</div>

		<!-- 前进后退 -->
		<div style="-webkit-app-region:no-drag; width:68px; height:32px; margin:9px 12px 0 8px; float:left; text-align:center; line-height:30px; font-weight:700; color:#999; cursor:pointer;">
			<a class="glass-bg box-show mh-if double-arrow-left" style="width:50%; height:100%; float:left; border-radius:5px 0 0 5px;"></a>
			<a class="glass-bg box-show mh-if double-arrow-right" style="width:50%; height:100%; float:right; border-radius:0 5px 5px 0;"></a>
		</div>

		<!-- 搜索栏 -->
		<div style="height:100%; float:left;">
			<div style="-webkit-app-region:no-drag; width:236px; height:38px; margin:6px 28px 0 0; position:relative;">
				<div class="super-btn-out" style="width:100%; height:100%;"></div>
				<label><input class="super-btn-in" type="text" style="width:190px; height:27px; left:43%; margin-top:1.2px; padding:2px 8px 0; box-sizing:border-box; text-align:left; letter-spacing:1px;"/></label>
				<div class="super-btn-out" style="width:28px; height:28px; top:5px; right:4px; position:absolute;">
					<router-link to="/search" class="super-btn-in mh-if search" style="width:30px; height:28.5px; display:inline-block; float:right; font-size:21px; line-height:30px;" />
				</div>
			</div>
		</div>

		<!-- 用户操作 -->

		<!-- 应用设置 -->

		<!-- 控制窗口 -->
		<div style="-webkit-app-region:no-drag; height:50%; top:15px; right:8px; position:absolute; z-index:9; color:#DDD;">
			<i @click="atest" class="mh-if lessen" style="font-size:23px;"></i>
			<i class="mh-if close" style="font-size:23px;"></i>
		</div>
	</div>
</template>

<script>
var ipcRenderer = require('electron').ipcRenderer

export default {
  name: 'TopMenu',

  methods: {
    atest () {
      ipcRenderer.send('hide-window')
    }
  }
}
</script>

<style scoped>

</style>