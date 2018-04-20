<template>
	<div class="glass-bg box-show" style="width:228px; height:100%; top:0; left:0; padding:52px 0 45px; position:fixed; border-radius:0; color:#AAA;">

		<div style="width:100%; height:481px; padding:6px 3px 3px; box-sizing:border-box;">
			<div style="width:100%; height:100%; padding:0 5px 8px; box-sizing:border-box; overflow:auto;">
				<ul>
					<li>
						<p style="margin-top:6px; line-height:1.5em; color:#EEE;">推荐</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">发现音乐</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">朋友动态</router-link>
              </li>
						</ul>
					</li>
					<li>
						<p style="margin-top:16px;line-height:1.5em; color:#EEE;">我的音乐</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">本地音乐</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">下载管理</router-link>
              </li>
						</ul>
					</li>
					<li>
						<p style="margin-top:16px; line-height:1.5em; color:#EEE;">创建的歌单</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">我喜欢的音乐</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">抽身cavc紧很好</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">茶水vdsvsd盈天48</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">除外i和你4没那么</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">tywque</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">洝ij45省的sj</router-link>
              </li>
						</ul>
					</li>
					<li>
						<p style="margin-top:16px; line-height:1.5em; color:#EEE;">收藏的歌单</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">XXXX</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">YYYY</router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">ZZZZ</router-link>
              </li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<div class="now-song box-show" style="width:100%; height:60px; position:relative;">
			<router-link to="song">
				<img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:44px; height:44px; margin:8px; padding:3px; float:left;" />
			</router-link>
      <router-link to="song" class="now-song-name">Song Name</router-link>
      <router-link to="singer" class="now-singer">JesBrian</router-link>
			<a @click="changeCollection" :class="{'active': isCollection}" class="mh-if non-colloection"></a>
			<a class="mh-if share"></a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'LeftMenu',

  data () {
    return {
      isCollection: false
    }
  },

  methods: {
    changeCollection () {
      this.isCollection = !this.isCollection
    }
  }
}
</script>

<style scoped>
	.now-song .now-song-name {
		margin:11px 0 6px; float:left; font-size:18px; color:#CCC;
	}
	.now-song .now-singer {
		color:#999;
	}
	.now-song a:hover {
		color:#FFF;
	}
	.now-song .non-colloection {
		top:10px; right:5px; position:absolute; font-size:18px;
	}
	.now-song .share {
		bottom:10px; right:5px; position:absolute; font-size:15px;
	}
	.now-song .non-colloection.active {
		color: #20dbfc;
	}

	::-webkit-scrollbar {
		width: 6px;
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