<template>
	<div style="height:100%; padding:63px 3% 18px 208px; position:relative; box-sizing:border-box;">

    <div style="width:76.5%; height:53px; top:53px; left:245px; margin:0 auto 28px; padding:0 38px; position:fixed; z-index:9; box-sizing:border-box; background:#181818; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC;">系统设置</span>
    </div>

    <div style="width:148px; top:138px; left:248px; padding-right:18px; position:fixed; text-align:right;">

      <ul>
        <li>
          <div class="config-nav-title">
          <p>账号</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title">
          <p>常规</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title">
          <p>播放</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title">
          <p>消息与隐私</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title">
          <p>快捷键</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title active">
          <p>下载设置</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title">
          <p>歌词</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title">
          <p>工具</p>
          </div>
        </li>
        <li>
          <div class="config-nav-title">
          <p>关于 Music House</p>
          </div>
        </li>
      </ul>

      <div class="box-show" style="width:5px; height:89%; top:14px; right:0; float:right; position:absolute; background-image: linear-gradient(#2af1fc, #1a9ee6); cursor:pointer;">
        <div :style="{'top' : this.navScrollTop}" style="width:15px; height:15px; right:-5px; margin-top:-6px; position:absolute; z-index:9; border-radius:50%; background:url(../../../../../static/images/default/slide-pointer.png) no-repeat; background-size:100% 100%;"></div>
        <div class="super-btn-out" style="width:10px; height:10px; top:-5px; right:-3.5px; position:absolute; border-radius:50%;"></div>
        <div class="super-btn-out" style="width:10px; height:10px; bottom:-5px; right:-3.5px; position:absolute; border-radius:50%;"></div>
      </div>
    </div>

    <div id="configContent" style="width:68%; margin:8px 38px 18px; position:absolute; box-sizing:border-box; overflow:hidden;">
      <ul>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">账号</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">常规</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">播放</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">消息与隐私</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">快捷键</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">下载设置</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">歌词</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">工具</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item-cell" style="height:120px; margin-bottom:12px;">
            <p class="config-item-title">关于 Music House</p>
          </div>
        </li>
      </ul>
    </div>

	</div>
</template>

<script>
import { getScrollTop } from '../../assets/js/commom.js'

export default {
  name: 'Config',

  components: {},

  data () {
    return {
      navScrollTop: 0,
      scrollContent: null
    }
  },

  mounted () {
    this.scrollContent = document.getElementById('mainContent')
    this.scrollContent.addEventListener('scroll', this.listenElementScroll)
  },

  beforeDestroy () {
    this.scrollContent.removeEventListener('scroll', this.listenElementScroll)
  },

  methods: {
    listenElementScroll () {
      // 这种做法是错的，但是先这样做吧
      this.navScrollTop = Math.round(getScrollTop(this.scrollContent) / 740 * 100) + '%'
      console.log(this.navScrollTop)
    }
  }
}
</script>

<style scoped>
  .config-nav-title {
    padding:8px 0;
  }
  .config-nav-title > p {
    cursor:pointer;
  }
  .config-nav-title.active > p {
    color: #00d8ff;
    text-shadow:2px 2px 2px #000;
  }

  .config-item-title {
    line-height:2em; font-size:20px;
  }
</style>