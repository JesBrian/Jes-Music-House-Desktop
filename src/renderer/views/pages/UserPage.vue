<template>
	<div>
		<!-- 个人信息 -->
    <div style="width:100%; min-height:208px;">
      <div style="width:22%; padding:38px; display:inline-block; box-sizing:border-box;">
        <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="box-show" style="width:138px; height:138px; padding:5px; float:left;"/>
      </div>

      <div style="width:75%; min-height:188px; display:inline-block;">

        <div style="width:100%; height:48px; box-shadow:0 3px 2px -2px #666;">
          <p style="float:left; text-indent:0.9em; font-size:26px; line-height:2em;">JesBrian</p>
          <div @click="openBrowser('http://music.jesbrian.cn/#/level')" class="super-btn-out" style="width:50px; height:26px; margin:11px 0 0 28px; float:left;">
            <span class="super-btn-in" style="width:44px; height:20px; line-height:20px;">Lv 9</span>
          </div>
          <page-link url="/setting" class="super-btn-out" style="width:114px; height:26px; right:18px; margin-top:11px; float:right;">
            <span class="super-btn-in" style="width:108px; height:20px; line-height:20px;"> 编辑个人信息</span>
          </page-link>
        </div>

        <div style="width:100%; height:38px; padding:8px 0 10px; box-shadow:0 3px 2px -2px #666; clear:both; text-align:center;">
          <page-link url="/user" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">动态</p>
          </page-link>
          <page-link url="/user" style="width:88px; height:100%; float:left; border-left:1px solid #333; border-right:1px solid #333;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">关注</p>
          </page-link>
          <page-link url="/user" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">粉丝</p>
          </page-link>
        </div>

        <p style="float:left; margin-top:13px; word-break:break-all; line-height:1.2em;">
          个人简介：<span style="letter-spacing:0.8px; color:#AAA;">redctfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfgh</span>
        </p>
      </div>

    </div>

    <!-- 创建的歌单 -->
    <div style="width:96%; height:53px; margin:0 auto; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC; line-height:68px;">我创建的歌单</span>
      <div style="margin-top:10px; float:right;">
        <div @click="changePlayListShowType('createPlayListShowType', 'picture-group')" :class="{'active' : createPlayListShowType === 'picture-group'}" class="super-btn-out play-list-type" title="大图模式" >
          <i class="super-btn-in mh-if theme"></i>
        </div>
        <div @click="changePlayListShowType('createPlayListShowType', 'list-group')" :class="{'active' : createPlayListShowType === 'list-group'}" class="super-btn-out play-list-type" title="列表模式" >
          <i class="super-btn-in mh-if music-list"></i>
        </div>
        <div @click="changePlayListShowType('createPlayListShowType', 'picture-list-group')" :class="{'active' : createPlayListShowType === 'picture-list-group'}" class="super-btn-out play-list-type" title="图列模式" >
          <i class="super-btn-in mh-if list"></i>
        </div>
      </div>
    </div>
    <div style="width:96%; margin:0 auto;">

      <show-play-list :showType="createPlayListShowType" />

    </div>

    <!-- 收藏的歌单 -->
    <div style="width:96%; height:53px; margin:0 auto; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC; line-height:68px;">我收藏的歌单</span>
      <div style="margin-top:10px; float:right;">
        <div @click="changePlayListShowType('collectionPlayListShowType', 'picture-group')" :class="{'active' : collectionPlayListShowType === 'picture-group'}" class="super-btn-out play-list-type" title="大图模式" >
          <i class="super-btn-in mh-if theme"></i>
        </div>
        <div @click="changePlayListShowType('collectionPlayListShowType', 'list-group')" :class="{'active' : collectionPlayListShowType === 'list-group'}" class="super-btn-out play-list-type" title="列表模式" >
          <i class="super-btn-in mh-if music-list"></i>
        </div>
        <div @click="changePlayListShowType('collectionPlayListShowType', 'picture-list-group')" :class="{'active' : collectionPlayListShowType === 'picture-list-group'}" class="super-btn-out play-list-type" title="图列模式" >
          <i class="super-btn-in mh-if list"></i>
        </div>
      </div>
    </div>

    <div style="width:96%; margin:0 auto 28px;">
      <show-play-list :showType="collectionPlayListShowType" />
    </div>

	</div>
</template>

<script>
  import ShowPlayList from '../../components/extends/play-list/ShowPlayList.vue'

  export default {
    name: 'UserPage',

    components: {
      ShowPlayList
    },

    data () {
      return {
        createPlayListShowType: 'picture-group',
        collectionPlayListShowType: 'picture-group'
      }
    },

    mounted () {
      this.localForage.getItem('userPlayListShowType', (result, value) => {
        if (value) {
          this.createPlayListShowType = value.create
          this.collectionPlayListShowType = value.collection
        }
      })
    },

    methods: {
      changePlayListShowType (playListType, showType = 'picture') {
        this[playListType] = showType
        this.localForage.setItem('userPlayListShowType', {
          create: this.createPlayListShowType,
          collection: this.collectionPlayListShowType
        })
      },

      openBrowser (url = '') {
        this.ipcRenderer.send('open-browser-url', url)
      }
    }
  }
</script>

<style scoped>
  .play-list-type {
    width:30px; height:30px;
  }
  .play-list-type > .super-btn-in {
    width:24px; height:24px; top:48%; font-size:19px; line-height:24px;
  }
  .play-list-type.active > .super-btn-in {
    top:50%;
  }
</style>