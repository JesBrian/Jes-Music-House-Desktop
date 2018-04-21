<template>
	<div class="glass-bg box-show" style="-webkit-app-region:drag; width:100%; height:54px; top:0; left:0; position:fixed; z-index:9; border-radius:0; color:#999;">
		<!-- LOGO -->
		<div style="width:188px; height:100%; float:left;">
			<router-link to="/" style="-webkit-app-region:no-drag; float:left;">
				<img src="../../../../static/images/Logo.png" style="width:30px; height:30px; margin:10px 12px 0; float:left;"/>
				<span style="font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff; line-height:52px;">Music House</span>
			</router-link>
		</div>

		<!-- 前进后退 -->
		<div style="-webkit-app-region:no-drag; width:68px; height:32px; margin:9px 18px 0 8px; float:left; text-align:center; line-height:30px; font-weight:700; cursor:pointer;">
			<a class="glass-bg box-show mh-if double-arrow-left" style="width:50%; height:100%; float:left; border-radius:5px 0 0 5px;"></a>
			<a class="glass-bg box-show mh-if double-arrow-right" style="width:50%; height:100%; float:right; border-radius:0 5px 5px 0;"></a>
		</div>

		<!-- 搜索栏 -->
		<div style="height:100%; float:left;">
			<div style="-webkit-app-region:no-drag; width:300px; height:38px; margin:6px 28px 0 0; position:relative;">
				<div class="super-btn-out" style="width:100%; height:100%;"></div>
				<label><input class="super-btn-in" type="text" placeholder="搜索一下更精彩" style="width:253px; height:27px; left:44.3%; margin-top:1.2px; padding:2px 8px 0; box-sizing:border-box; text-align:left; letter-spacing:1px; font-size:18px; color:#DDD;"/></label>
				<div class="super-btn-out" style="width:28px; height:28px; top:5px; right:4px; position:absolute;">
					<router-link to="/search" class="super-btn-in mh-if search" style="width:30px; height:28.5px; display:inline-block; float:right; font-size:21px; line-height:30px;" />
				</div>
			</div>
		</div>

		<!-- 用户操作 -->
		<div style="margin-right:268px; float:right;">
			<router-link to="/user">
				<img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="-webkit-app-region:no-drag; width:25px; height:25px; margin:13px 8px 0 0; padding:1.5px; float:left;" />
			</router-link>
      <div style="display:inline-block; font-size:18px; line-height:54px;">
        <p class="text-hidden" style="max-width:108px; display:inline-block;">JesBrianJesBrian</p>
        <i style="width:0; height:0; margin:23px 0 0 6px; border-width:6px; border-style:solid; border-color:#999 transparent transparent transparent; float:right;"></i>
      </div>
    </div>

		<!-- 应用设置 & 控制窗口 -->
		<div style="height:50%; top:15px; right:18px; position:absolute; z-index:9; color:#DDD;">
			<i class="mh-if theme" style="-webkit-app-region:no-drag; margin:0 8px; font-size:21px;"></i>
			<i class="mh-if feedback" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></i>
			<i class="mh-if gear" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></i>
			<i style="margin:0 18px; padding:8px 0 5px; border-right:2px solid #222;"></i>
			<i @click="atest" class="mh-if lessen" style="-webkit-app-region:no-drag; margin:0 2px; font-size:23px;"></i>
			<i @click="closeWindow" class="mh-if close" style="-webkit-app-region:no-drag; margin:0 2px; font-size:23px;"></i>
		</div>
	</div>
</template>

<script>
var ipcRenderer = require('electron').ipcRenderer

export default {
  name: 'TopMenu',

  methods: {
    closeWindow () {
      ipcRenderer.send('hide-main-window')
    },
    atest () {
      ipcRenderer.send('hide-window')
    }
  }
}
</script>

<style scoped>

</style>