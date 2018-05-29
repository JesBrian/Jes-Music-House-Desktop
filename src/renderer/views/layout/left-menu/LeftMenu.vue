<template>
	<div class="glass-bg box-show" style="width:228px; height:100%; top:0; left:0; padding:52px 0 45px; position:fixed; border-radius:0; color:#AAA;">

		<div style="width:100%; height:481px; padding:6px 3px 3px; box-sizing:border-box;">
			<div style="width:100%; height:100%; padding:0 5px 8px; box-sizing:border-box; overflow:auto;">
				<ul>
					<li>
						<p @click="changeFirstMenuTypeShow('recomShow')" style="margin-top:3px;">
              推荐<i :class="recomShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
						<ul v-show="recomShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/">
                  <i class="mh-if music-box" style="margin-right:6px;"></i>发现音乐
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/friend">
                  <i class="mh-if singer" style="margin-right:6px;"></i>朋友动态
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/comment">
                  <i class="mh-if exponential" style="margin-right:4px;"></i>榜单推荐
                </router-link>
              </li>
						</ul>
					</li>
					<li>
						<p @click="changeFirstMenuTypeShow('musicShow')">
              我的音乐<i :class="musicShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
						<ul v-show="musicShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/local">
                  <i class="mh-if redis" style="margin-right:6px;"></i>本地音乐
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/download">
                  <i class="mh-if download" style="margin-right:6px;"></i>下载管理
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/collection">
                  <i class="mh-if collection-music" style="margin-right:6px;"></i>我的收藏
                </router-link>
              </li>
						</ul>
					</li>
					<li style="position:relative;">
						<p @click="changeFirstMenuTypeShow('albumShow')">
              创建的歌单<i :class="albumShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
            <i @click="changeModalType('NewAlbum')" class="mh-if add-collection"></i>
						<ul v-show="albumShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list">
                  <i class="mh-if non-colloection" style="margin-right:6px;"></i>我喜欢的音乐
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>tywque
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>洝ij45省的sj
                </router-link>
              </li>
						</ul>
					</li>
					<li>
						<p @click="changeFirstMenuTypeShow('collectionShow')">
              收藏的歌单<i :class="collectionShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
						<ul v-show="collectionShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list">
                  <i class="mh-if menu" style="margin-right:6px;"></i>XXXX
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list">
                  <i class="mh-if menu" style="margin-right:6px;"></i>YYYY
                </router-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <router-link to="/play-list">
                  <i class="mh-if menu" style="margin-right:6px;"></i>ZZZZ
                </router-link>
              </li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

		<div class="now-song box-show">
			<div @click="changeShowMusicView" class="now-song-img box-show">
				<img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:100%; height:100%;" />
        <div class="mh-if enlarge"></div>
			</div>
      <div @click="changeShowMusicView" class="now-song-name">Song Name</div>
      <div class="now-singer text-hidden">
        <router-link to="/singer">环境是</router-link>
        <i style="margin:0 1px;">/</i>
        <router-link to="/singer">JesBan</router-link>
        <i style="margin:0 1px;">/</i>
        <router-link to="/singer">参数</router-link>
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
      recomShow: true,
      musicShow: true,
      albumShow: true,
      collectionShow: true,
      isCollection: false
    }
  },

  methods: {
    changeShowMusicView () {
      this.$store.commit('CHANGE_SHOW_MUSIC_VIEW')
    },

    changeFirstMenuTypeShow (firstMenuType) {
      this[firstMenuType] = !this[firstMenuType]
    },

    changeCollection () {
      this.isCollection = !this.isCollection
    },

    changeModalType (type = '') {
      this.$store.commit('CHANGE_MODAL_TYPE', type)
    }
  }
}
</script>

<style scoped>
  .mh-if.add-collection {
    top:1.5px; left:158px; position:absolute; font-size:18px;
  }
  .mh-if.add-collection:hover {
    color:#20dbfc;
  }
  li > p {
    margin:16px 6px 0; position:relative; line-height:1.5em; color:#EEE; font-weight:700; cursor:pointer;
  }
  p > .mh-if {
    top:-2px; left:180px; position:absolute; font-size:15px; font-weight:500; color:#AAA;
  }
  p:hover > .mh-if {
    color:#EEE;
  }
  p > .mh-if:hover {
    color:#20dbfc;
  }
  li > a {
    display: block;
  }
  li > a:hover .mh-if {
    color:#20dbfc;
  }
  li > a:hover {
    color:#DDD;
  }

  .now-song {
    width:100%; height:60px; position:relative;
  }
  .now-song .now-song-img {
    width:44px; height:42.5px; margin:8px; padding:3px; position:relative; float:left;
  }
  .now-song .now-song-img > div {
    width:100%; height:100%; top:0; left:0; position:absolute; display:none; background:rgba(0,0,0,0.68); text-align:center; line-height:43px; font-size:38px; color: #00d8ff;
  }
  .now-song .now-song-img:hover > div {
    display:block;
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
		top:10px; right:8px; position:absolute; font-size:18px;
	}
	.now-song .share {
		bottom:10px; right:8px; position:absolute; font-size:15px;
	}
	.now-song .non-colloection.active {
		color: #20dbfc;
	}
</style>