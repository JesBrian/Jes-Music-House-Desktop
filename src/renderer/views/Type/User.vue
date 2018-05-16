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
          <div class="super-btn-out" style="width:50px; height:26px; margin:11px 0 0 28px; float:left;">
            <span class="super-btn-in" style="width:44px; height:20px; line-height:20px;">Lv 9</span>
          </div>
          <div class="super-btn-out" style="width:114px; height:26px; right:18px; margin-top:11px; float:right;">
            <span class="super-btn-in" style="width:108px; height:20px; line-height:20px;"> 编辑个人信息</span>
          </div>
        </div>

        <div style="width:100%; height:38px; padding:8px 0; box-shadow:0 3px 2px -2px #666; clear:both; text-align:center;">
          <router-link to="/user" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">动态</p>
          </router-link>
          <router-link to="/user" style="width:88px; height:100%; float:left; border-left:1px solid #333; border-right:1px solid #333;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">关注</p>
          </router-link>
          <router-link to="/user" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">粉丝</p>
          </router-link>
        </div>

        <p style="float:left; margin-top:13px; word-break:break-all; line-height:1.2em;">
          个人简介：<span style="letter-spacing:0.8px; color:#AAA;">redctfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfgh</span>
        </p>
      </div>

    </div>

    <!-- 创建的歌单 -->
    <div style="width:96%; height:53px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC;">我创建的歌单</span>
      <div style="margin-top:10px; float:right;">
        <div @click="changePlsyListShowType('createPlsyListShowType', 'picture')" :class="{'active' : createPlsyListShowType === 'picture'}" class="super-btn-out play-list-type" title="大图模式" >
          <i class="super-btn-in mh-if theme"></i>
        </div>
        <div @click="changePlsyListShowType('createPlsyListShowType', 'list')" :class="{'active' : createPlsyListShowType === 'list'}" class="super-btn-out play-list-type" title="列表模式" >
          <i class="super-btn-in mh-if music-list"></i>
        </div>
        <div @click="changePlsyListShowType('createPlsyListShowType', 'picture-list')" :class="{'active' : createPlsyListShowType === 'picture-list'}" class="super-btn-out play-list-type" title="图列模式" >
          <i class="super-btn-in mh-if list"></i>
        </div>
      </div>
    </div>
    <div style="width:96%; margin:0 auto;">
      <div style="width:20%; height:168px; margin-bottom:18px; margin-right:-4px; display:inline-block;">
        <div style="width:128px; height:100%; margin:0 auto;">
          <div @click.right="showAlertMenu" style="width:100%; height:128px; background:lightpink"></div>
          <p class="text-hidden" style="width:100%; line-height:1.8em;">我的听歌排行</p>
          <p style="font-size:12.5px; color:#999;">累计听歌 XX 首</p>
        </div>
      </div>
      <div v-for="n in 11" style="width:20%; height:168px; margin-bottom:18px; display:inline-block;">
        <div style="width:128px; height:100%; margin:0 auto;">
          <div @click.right="showAlertMenu" style="width:100%; height:128px; background:lightpink"></div>
          <p class="text-hidden" style="width:100%; line-height:1.8em;">This is PlayList Name</p>
          <p style="font-size:12.5px; color:#999;">XX 首</p>
        </div>
      </div>
    </div>

    <!-- 收藏的歌单 -->
    <div style="width:96%; height:53px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC;">我收藏的歌单</span>
      <div style="margin-top:10px; float:right;">
        <div @click="changePlsyListShowType('collectionPlayListShowType', 'picture')" :class="{'active' : collectionPlayListShowType === 'picture'}" class="super-btn-out play-list-type" title="大图模式" >
          <i class="super-btn-in mh-if theme"></i>
        </div>
        <div @click="changePlsyListShowType('collectionPlayListShowType', 'list')" :class="{'active' : collectionPlayListShowType === 'list'}" class="super-btn-out play-list-type" title="列表模式" >
          <i class="super-btn-in mh-if music-list"></i>
        </div>
        <div @click="changePlsyListShowType('collectionPlayListShowType', 'picture-list')" :class="{'active' : collectionPlayListShowType === 'picture-list'}" class="super-btn-out play-list-type" title="图列模式" >
          <i class="super-btn-in mh-if list"></i>
        </div>
      </div>
    </div>
    <div style="width:96%; margin:0 auto;">
      <div v-for="n in 8" style="width:20%; height:168px; margin-bottom:18px; display:inline-block;">
        <div style="width:128px; height:100%; margin:0 auto;">
          <div @click.right="showAlertMenu" style="width:100%; height:128px; background:lightpink"></div>
          <p class="text-hidden" style="width:100%; line-height:1.8em;">This is PlayList Name</p>
          <p style="font-size:12.5px; color:#999;">XX 首</p>
        </div>
      </div>
    </div>

	</div>
</template>

<script>
import { mouseCoords } from '../../assets/js/commom.js'

export default {
  name: 'User',

  components: {},

  data () {
    return {
      createPlsyListShowType: 'picture',
      collectionPlayListShowType: 'picture'
    }
  },

  methods: {
    changePlsyListShowType (playListType, showType = 'picture') {
      this[playListType] = showType
    },

    showAlertMenu (event) {
      let position = mouseCoords(event)
      let alertMenuConf = {
        type: 'SongMenu',
        position: position
      }
      this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
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