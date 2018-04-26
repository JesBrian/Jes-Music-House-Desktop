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
				<label><input v-model="searchKey" class="super-btn-in" placeholder="搜索一下更精彩" style="width:253px; height:27px; left:44.3%; margin-top:1.2px; padding:2px 8px 0; box-sizing:border-box; text-align:left; letter-spacing:1px; font-size:18px; color:#DDD;"/></label>
				<div class="super-btn-out" style="width:28px; height:28px; top:5px; right:4px; position:absolute;">
          <a @click="gotoSearch" class="super-btn-in mh-if search" style="width:30px; height:28.5px; display:inline-block; float:right; font-size:21px; line-height:30px;" ></a>
				</div>
			</div>
		</div>

		<!-- 用户操作 -->
		<div style="-webkit-app-region:no-drag; height:25px; margin:15px 268px 0 0; float:right; line-height:25px; ">
			<router-link to="/user">
				<img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:25px; margin:0 8px 0 0; padding:1.5px; float:left;" />
			</router-link>
      <div @click="changeShowContentType('UserOperation')" style="display:inline-block; font-size:18px; cursor:pointer;">
        <p class="text-hidden" style="max-width:108px; display:inline-block;">JesBrianJesBrian</p>
        <i style="width:0; height:0; margin:10px 0 0 6px; border-width:6px; border-style:solid; border-color:#999 transparent transparent transparent; float:right;"></i>
      </div>
    </div>

		<!-- 应用设置 & 控制窗口 -->
		<div style="height:50%; top:15px; right:18px; position:absolute; z-index:9; color:#DDD;">
			<i @click="changeShowContentType('ChooseTheme')" class="mh-if theme" style="-webkit-app-region:no-drag; margin:0 8px; font-size:21px;"></i>
			<i @click="changeShowContentType('MessageContent')" class="mh-if feedback" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></i>
			<router-link to="/config" class="mh-if gear" style="-webkit-app-region:no-drag; margin:0 8px; font-size:23px;"></router-link>
			<i style="margin:0 18px; padding:8px 0 5px; border-right:2px solid #222;"></i>
			<i @click="atest" class="mh-if lessen" style="-webkit-app-region:no-drag; margin:0 2px; font-size:23px;"></i>
			<i @click="closeWindow" class="mh-if close" style="-webkit-app-region:no-drag; margin:0 2px; font-size:23px;"></i>
		</div>

    <!-- 展示内容 -->
    <component :is="showContentType">
      <i style="width:0; height:0; top:-25px; left:51%; position:absolute; transform:translate(-50%,0); border-width:12px; border-style:solid; border-color:transparent transparent #555 transparent;"></i>
      <i @click="closeShowContent" class="close-show-content">×</i>
    </component>

	</div>
</template>

<script>
import UserOperation from './ShowContentType/UserOperation.vue'
import MessageContent from './ShowContentType/MessageContent.vue'
import ChooseTheme from './ShowContentType/ChooseTheme.vue'

var ipcRenderer = require('electron').ipcRenderer

export default {
  name: 'TopMenu',

  components: {UserOperation, MessageContent, ChooseTheme},

  data () {
    return {
      searchKey: '',
      showContentType: ''
    }
  },

  methods: {
    gotoSearch () {
      if (this.searchKey === '') {
        return false
      }
      this.$router.push({path: '/search/' + this.searchKey})
    },

    closeShowContent () {
      this.showContentType = ''
    },
    changeShowContentType (tyepe = '') {
      if (this.showContentType === tyepe) {
        this.showContentType = ''
      } else {
        this.showContentType = tyepe
      }
    },

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
  .close-show-content {
    top:0; right:6px; position:absolute; font-size:28px; cursor:pointer;
  }
  .close-show-content:hover {
    color:#DDD;
  }
</style>