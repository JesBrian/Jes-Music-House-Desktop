<template>
	<div style="height:100%; padding:58px 3% 18px 208px; position:relative; box-sizing:border-box;">

    <div style="width:81%; height:53px; top:53px; left:225px; margin:0 auto 28px; padding:0 38px; position:fixed; z-index:9; box-sizing:border-box; background:#181818; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
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

      <div class="box-show" style="width:5px; height:88.5%; top:18px; right:0; float:right; position:absolute; background-image: linear-gradient(#2af1fc, #1a9ee6); cursor:pointer;">
        <div :style="{'top' : this.navScrollTop}" style="width:15px; height:15px; right:-5px; margin-top:-6px; position:absolute; z-index:9; border-radius:50%; background:url(../../../../../static/images/default/slide-pointer.png) no-repeat; background-size:100% 100%;"></div>
        <div class="super-btn-out" style="width:10px; height:10px; top:-5px; right:-3.5px; position:absolute; border-radius:50%;"></div>
        <div class="super-btn-out" style="width:10px; height:10px; bottom:-5px; right:-3.5px; position:absolute; border-radius:50%;"></div>
      </div>
    </div>

    <div id="configContent" style="width:708px; height:476px; margin:0 0 0 33px; padding:0 38px 0 0; position:fixed; box-sizing:border-box; overflow:auto;">
      <ul>
        <li class="box-shadow">
          <div class="config-item" style="height:302px; margin-bottom:12px;">
            <p class="config-item-title">账号</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:358px; margin-bottom:12px;">
            <p class="config-item-title">常规</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:485px; margin-bottom:12px;">
            <p class="config-item-title">播放</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:268px; margin-bottom:12px;">
            <p class="config-item-title">消息与隐私</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:348px; margin-bottom:12px;">
            <p class="config-item-title">快捷键</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:408px; margin-bottom:12px;">
            <p class="config-item-title">下载设置</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:368px; margin-bottom:12px;">
            <p class="config-item-title">歌词</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:308px; margin-bottom:12px;">
            <p class="config-item-title">工具</p>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:288px; margin-bottom:12px;">
            <p class="config-item-title">关于 Music House</p>
          </div>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
import { getElemenPosion, getScrollTop } from '../../assets/js/commom.js'

export default {
  name: 'ConfigPage',

  components: {},

  data () {
    return {
      navScrollTop: 0,
      scrollContent: null,
      scrollItemPositionNum: 0,
      scrollItemPositionArr: []
    }
  },

  mounted () {
    this.scrollContent = document.getElementById('configContent')
    let tempArr = this.scrollContent.querySelectorAll('.config-item')
    this.scrollItemPositionNum = tempArr.length - 1
    let tempScrollHeight = getElemenPosion(tempArr[tempArr.length - 1], 'top')

    for (let i = 0; i < this.scrollItemPositionNum; i++) {
      this.scrollItemPositionArr.push((getElemenPosion(tempArr[i], 'top') - 114) / tempScrollHeight)
    }
    this.scrollContent.addEventListener('scroll', this.listenElementScroll)

    console.log(this.scrollItemPositionArr)
  },

  beforeDestroy () {
    this.scrollContent.removeEventListener('scroll', this.listenElementScroll)
  },

  methods: {
    listenElementScroll () {
      let tempScrollTop = getScrollTop(this.scrollContent) / 2765
      let i = 0
      for (; i < this.scrollItemPositionNum; i++) {
        if (tempScrollTop <= this.scrollItemPositionArr[i]) {
          console.log(i)
          break
        }
      }
      this.navScrollTop = (i / this.scrollItemPositionNum).toFixed(6) * 100 + '%'

      console.log(tempScrollTop)
    }
  }
}
</script>

<style scoped>
  .config-nav-title {
    line-height:2.2em;
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