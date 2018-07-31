<template>
	<div class="glass-bg box-show" style="width:228px; height:100%; top:0; left:0; padding:52px 0 45px; position:fixed; border-radius:0; color:#AAA;">

		<div style="width:100%; height:481px; padding:6px 3px 3px; box-sizing:border-box;">
			<div style="width:100%; height:100%; padding:0 5px 8px; box-sizing:border-box; overflow:auto;">
				<ul>
					<li>
						<p @click="changeFirstMenuTypeShow('recomShow')" style="margin-top:3px;">
              推荐<i :class="leftMenuSwitch.recomShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
						<ul v-show="leftMenuSwitch.recomShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/" class="left-menu-item">
                  <i class="mh-if music-box" style="margin-right:6px;"></i>发现音乐
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/rank" class="left-menu-item">
                  <i class="mh-if exponential" style="margin-right:4px;"></i>榜单推荐
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/comment" class="left-menu-item">
                  <i class="mh-if level" style="margin-right:4px;"></i>个人推荐
                </page-link>
              </li>
              <li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/friend" class="left-menu-item">
                  <i class="mh-if singer" style="margin-right:6px;"></i>朋友动态
                </page-link>
              </li>
						</ul>
					</li>
					<li>
						<p @click="changeFirstMenuTypeShow('musicShow')">
              我的音乐<i :class="leftMenuSwitch.musicShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
						<ul v-show="leftMenuSwitch.musicShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/local" class="left-menu-item">
                  <i class="mh-if redis" style="margin-right:6px;"></i>本地音乐
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/download" class="left-menu-item">
                  <i class="mh-if download" style="margin-right:6px;"></i>下载管理
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/follow/singer" class="left-menu-item">
                  <i class="mh-if collection-music" style="margin-right:6px;"></i>我的关注
                </page-link>
              </li>
						</ul>
					</li>
					<li style="position:relative;">
						<p @click="changeFirstMenuTypeShow('albumShow')">
              创建的歌单<i :class="leftMenuSwitch.albumShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
            <i @click="changeModalType('NewAlbum')" class="mh-if add-collection"></i>
						<ul v-show="leftMenuSwitch.albumShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/play-list" class="left-menu-item">
                  <i class="mh-if non-colloection" style="margin-right:6px;"></i>我喜欢的音乐
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/play-list" class="left-menu-item">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>tywque
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/play-list" class="left-menu-item">
                  <i class="mh-if music-list" style="margin-right:6px;"></i>洝ij45省的sj
                </page-link>
              </li>
						</ul>
					</li>
					<li>
						<p @click="changeFirstMenuTypeShow('collectionShow')">
              收藏的歌单<i :class="leftMenuSwitch.collectionShow ? 'double-arrow-down' : 'double-arrow-right'" class="mh-if"></i>
            </p>
						<ul v-show="leftMenuSwitch.collectionShow">
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/play-list" class="left-menu-item">
                  <i class="mh-if menu" style="margin-right:6px;"></i>XXXX
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/play-list" class="left-menu-item">
                  <i class="mh-if menu" style="margin-right:6px;"></i>YYYY
                </page-link>
              </li>
							<li class="box-shadow" style="padding:6px 0 6px 18px; line-height:1.2em; font-size:14px;">
                <page-link url="/play-list" class="left-menu-item">
                  <i class="mh-if menu" style="margin-right:6px;"></i>ZZZZ
                </page-link>
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
        <page-link url="/singer">环境是</page-link>
        <i style="margin:0 1px;">/</i>
        <page-link url="/singer">JesBan</page-link>
        <i style="margin:0 1px;">/</i>
        <page-link url="/singer">参数</page-link>
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
        leftMenuSwitch: {
          recomShow: true,
          musicShow: true,
          albumShow: true,
          collectionShow: true
        },
        isCollection: false
      }
    },

    created () {
      this.$localForage.getItem('leftMenu', (result, value) => {
        if (value) {
          this.leftMenuSwitch = value
        }
      })
    },

    methods: {
      changeShowMusicView () {
        this.$store.commit('CHANGE_SHOW_MUSIC_VIEW')
        this.$root.eventHub.$emit('closeCloverComponent')
      },

      changeFirstMenuTypeShow (firstMenuType) {
        this.leftMenuSwitch[firstMenuType] = !this.leftMenuSwitch[firstMenuType]
        this.$localForage.setItem('leftMenu', this.leftMenuSwitch)
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
  li > .left-menu-item {
    width:100%;
    height:100%;
    color:#999;
  }
  li > .left-menu-item:hover .mh-if {
    color:#20dbfc;
  }
  li > .left-menu-item:hover {
    color:#DDD;
  }

  .now-song {
    width:100%; height:60px; position:relative;
  }
  .now-song .now-song-img {
    width:44px; height:42.5px; margin:8px; padding:3px; position:relative; float:left;
  }
  .now-song .now-song-img > div {
    width:100%; height:100%; top:0; left:0; position:absolute; display:none; background:rgba(0,0,0,0.68); text-align:center; line-height:45px; font-size:38px; color: #00d8ff;
  }
  .now-song .now-song-img:hover {
    background:#555;
  }
  .now-song .now-song-img:hover > div {
    display:block;
  }
	.now-song .now-song-name {
		margin:10px 0 6px; float:left; font-size:18px; color:#CCC; cursor:pointer;
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