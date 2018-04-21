<template>
	<div class="glass-bg box-show" style="width:228px; height:100%; top:0; left:0; padding:52px 0 45px; position:fixed; border-radius:0; color:#AAA;">

		<div style="width:100%; height:481px; padding:6px 3px 3px; box-sizing:border-box;">
			<div style="width:100%; height:100%; padding:0 5px 8px; box-sizing:border-box; overflow:auto;">
				<ul>
					<li>
						<p style="margin:6px 6px 0; line-height:1.5em; color:#EEE;">推荐</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if music-box" style="margin-right:6px;"></i>发现音乐
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if singer" style="margin-right:6px;"></i>朋友动态
                </router-link>
              </li>
						</ul>
					</li>
					<li>
						<p style="margin:16px 6px 0;line-height:1.5em; color:#EEE;">我的音乐</p>
						<ul>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if redis" style="margin-right:6px;"></i>本地音乐
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if download" style="margin-right:6px;"></i>下载管理
                </router-link>
              </li>
						</ul>
					</li>
					<li style="position:relative;">
						<p @click="changeMyAlbumShow" style="margin:16px 6px 0; position:relative; line-height:1.5em; color:#EEE; cursor:pointer;">
              创建的歌单<i :class="myAlbumShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if" style="top:-2px; left:180px; position:absolute; font-size:15px;"></i>
            </p>
            <i @click="changeModalType('NewAlbum')" class="mh-if add-collection" style="top:0; left:158px; position:absolute; font-size:18px;"></i>
						<ul v-show="myAlbumShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if non-colloection" style="margin-right:6px;"></i>我喜欢的音乐
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>抽身cavc紧很好
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>茶水vdsvsd盈天48
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>除外i和你4没那么
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>tywque
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>洝ij45省的sj
                </router-link>
              </li>
						</ul>
					</li>
					<li>
						<p @click="changeCollectionAlbumShow" style="margin:16px 6px 0; position:relative; line-height:1.5em; color:#EEE; cursor:pointer;">
              收藏的歌单<i :class="collectionAlbumShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if" style="top:-2px; left:180px; position:absolute; font-size:15px;"></i>
            </p>
						<ul v-show="collectionAlbumShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if menu" style="margin-right:6px;"></i>XXXX
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if menu" style="margin-right:6px;"></i>YYYY
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list" style="display: block;">
                  <i class="mh-if menu" style="margin-right:6px;"></i>ZZZZ
                </router-link>
              </li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<div class="now-song box-show">
			<router-link to="song">
				<img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:44px; height:44px; margin:8px; padding:3px; float:left;" />
			</router-link>
      <router-link to="song" class="now-song-name">Song Name</router-link>
      <div class="now-singer text-hidden">
        <router-link to="singer">环境是</router-link>
        <i style="margin:0 1px;">/</i>
        <router-link to="song">JesBan</router-link>
        <i style="margin:0 1px;">/</i>
        <router-link to="song">参数</router-link>
      </div>
			<a @click="changeCollection" :class="{'active': isCollection}" class="mh-if non-colloection"></a>
			<a @click="changeModalType('Share')" class="mh-if share"></a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'LeftMenu',

  data () {
    return {
      myAlbumShow: true,
      collectionAlbumShow: true,
      isCollection: false
    }
  },

  methods: {
    changeCollectionAlbumShow () {
      this.collectionAlbumShow = !this.collectionAlbumShow
    },
    changeMyAlbumShow () {
      this.myAlbumShow = !this.myAlbumShow
    },

    changeCollection () {
      this.isCollection = !this.isCollection
    },

    changeModalType (type = '') {
      this.$store.commit('CHANGE_MODAL_TYEP', type)
    }
  }
}
</script>

<style scoped>
  .now-song {
    width:100%; height:60px; position:relative;
  }
	.now-song .now-song-name {
		margin:10px 0 6px; float:left; font-size:18px; color:#CCC;
	}
	.now-song .now-singer {
    width:138px;
    top:34px;
    left:60px;
    position:absolute;
    line-height:1.2em;
    font-size:13px;
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