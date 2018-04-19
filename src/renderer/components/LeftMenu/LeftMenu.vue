<template>
	<div class="glass-bg box-show" style="width:188px; height:100%; top:0; left:0; padding:52px 0 45px; position:fixed; border-radius:0; color:#AAA;">

		<div style="width:100%; height:480px; padding:3px; box-sizing:border-box;">
			<div style="width:100%; height:100%; padding:0 3px 8px; box-sizing:border-box; overflow:auto;">
				<ul>
					<li>
						<p style="margin-top:13px; line-height:1.5em; color:#DDD;">推荐</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">发现音乐</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">朋友动态</li>
						</ul>
					</li>
					<li>
						<p style="margin-top:13px; line-height:1.5em; color:#DDD;">我的音乐</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">本地音乐</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">下载管理</li>
						</ul>
					</li>
					<li>
						<p style="margin-top:13px; line-height:1.5em; color:#DDD;">创建的歌单</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">我喜欢的音乐</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">抽身cavc紧很好</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">茶水vdsvsd盈天48</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">除外i和你4没那么</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">tywque</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">洝ij45省的sj</li>
						</ul>
					</li>
					<li>
						<p style="margin-top:13px; line-height:1.5em; color:#DDD;">收藏的歌单</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">XXXX</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">YYYY</li>
							<li class="box-shadow" style="padding:6px 0 6px 18px;">ZZZZ</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<div class="box-show" style="width:100%; height:60px; position:relative;">
			<img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:44px; height:44px; margin:8px; padding:3px; float:left;" />
			<p><router-link to="song" style="margin:11px 0 6px; float:left; font-size:18px;">Song Name</router-link></p>
			<router-link to="singer">JesBrian</router-link>
			<i class="mh-if non-colloection" style="top:10px; right:5px; position:absolute; font-size:18px;"></i>
			<i class="mh-if share" style="bottom:10px; right:5px; position:absolute; font-size:15px;"></i>
		</div>
	</div>
</template>

<script>
export default {
  name: 'LeftMenu'
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