<template>
  <div style="height:100%; padding:52px 3% 18px 208px; position:relative; box-sizing:border-box;">

    <div style="width:81%; height:53px; top:53px; left:225px; margin:0 auto 28px; padding:0 38px; position:fixed; z-index:9; box-sizing:border-box; background:#181818; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC;">系统设置</span>
    </div>

    <div style="width:148px; top:138px; left:248px; padding-right:18px; position:fixed; text-align:right;">
      <div class="config-nav-title">账号</div>
      <div class="config-nav-title">常规</div>
      <div class="config-nav-title">播放</div>
      <div class="config-nav-title">消息与隐私</div>
      <div class="config-nav-title">快捷键</div>
      <div class="config-nav-title active">下载设置</div>
      <div class="config-nav-title">歌词</div>
      <div class="config-nav-title">工具</div>
      <div class="config-nav-title">关于 Music House</div>

      <div class="box-show" style="width:5px; height:88.5%; top:18px; right:0; float:right; position:absolute; background-image: linear-gradient(#2af1fc, #1a9ee6); cursor:pointer;">
        <div id="configScrollPointer" :style="{'top' : this.navScrollTop}"></div>
        <div class="super-btn-out" style="width:10px; height:10px; top:-5px; right:-3.5px; position:absolute; border-radius:50%;"></div>
        <div class="super-btn-out" style="width:10px; height:10px; bottom:-5px; right:-3.5px; position:absolute; border-radius:50%;"></div>
      </div>
    </div>

    <div id="configContent" style="width:708px; height:476px; margin:0 0 0 33px; padding:0 38px 0 0; position:fixed; box-sizing:border-box; overflow:auto;">
      <ul>
        <li class="box-shadow">
          <div class="config-item" style="height:302px; margin-bottom:12px;">
            <p class="config-item-title">账号</p>
            <div>
              <page-link url="/setting" class="super-btn-out" style="width:88px; height:31px;">
                <span class="super-btn-in" style="width:78px; height:22px; line-height:22px;"> 修改信息</span>
              </page-link>
              <a  @click="openBrowser('http://music.jesbrian.cn/#/retrievePasswd')" class="super-btn-out" style="width:88px; height:31px;">
                <span class="super-btn-in" style="width:78px; height:22px; line-height:22px;"> 修改密码</span>
              </a>
              <page-link class="super-btn-out" style="width:88px; height:31px;">
                <span class="super-btn-in" style="width:78px; height:22px; line-height:22px;"> 绑定账号</span>
              </page-link>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:358px; margin-bottom:12px;">
            <p class="config-item-title">常规</p>
            <div>
              添加音乐到播放列表时:
              <label>
                <input type="radio"/> 下一首播放
              </label>
              <label>
                <input type="radio"/> 列表最后播放
              </label>
            </div>
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
            <div>
              下载目录：默认将音乐文件下载在该文件夹下
              <div>
                <p style="margin:8px 18px 0 0; float:left; font-size:18px;">C:\Users\JesBrian\Music</p>
                <div class="super-btn-out" style="width:106px; height:30px;">
                  <span class="super-btn-in" style="width:98px; height:22px; line-height:23px;">更改目录</span>
                </div>
                <div class="super-btn-out" style="width:106px; height:30px;">
                  <span class="super-btn-in" style="width:98px; height:22px; line-height:23px;">打开目录</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:368px; margin-bottom:12px;">
            <p class="config-item-title">歌词</p>
            <div>
              启用歌词显示:

              <super-switch v-model="showLyric" />
            </div>
            <div>
              歌词显示形式:
              <label>
                <input type="radio"/> 桌面歌词
              </label>
              <label>
                <input type="radio"/> 菜单栏歌词
              </label>
            </div>
          </div>
        </li>
        <li class="box-shadow">
          <div class="config-item" style="height:308px; margin-bottom:12px;">
            <p class="config-item-title">工具</p>
          </div>
        </li>
        <li class="box-shadow">
          <div style="height:288px; margin-bottom:12px;">
            <p class="config-item-title">关于 Music House</p>
            <div>
              当前版本：
              <page-link class="super-btn-out" style="width:88px; height:30px;">
                <span class="super-btn-in" style="width:78px; height:21px; line-height:20px;">意见反馈</span>
              </page-link>
            </div>
            <div>
              下载移动客户端：
              <div class="super-btn-out" style="width:88px; height:30px;">
                <span class="super-btn-in" style="width:78px; height:21px; line-height:20px;">iPhone版</span>
              </div>
              <div class="super-btn-out" style="width:88px; height:30px;">
                <span class="super-btn-in" style="width:78px; height:21px; line-height:20px;">iPad版</span>
              </div>
              <div class="super-btn-out" style="width:88px; height:30px;">
                <span class="super-btn-in" style="width:78px; height:21px; line-height:20px;">Android版</span>
              </div>
            </div>
            <div>
              《 Music House 服务条款》
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getElemenPosion, getScrollTop} from '../../assets/js/commom.js'

  import SuperSwitch from '../../components/base/switch/SuperSwitch.vue'

  export default {
    name: 'ConfigPage',

    components: {
      SuperSwitch
    },

    data () {
      return {
        showLyric: false,

        navScrollTop: 0,
        scrollContent: null,
        scrollItemPositionNum: 0,
        scrollItemPositionArr: []
      }
    },

    mounted () {
      this.scrollContent = document.getElementById('configContent')
      let tempArr = this.scrollContent.querySelectorAll('.config-item')
      this.scrollItemPositionNum = tempArr.length
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
          if (tempScrollTop < this.scrollItemPositionArr[i]) {
            console.log(i)
            i--
            break
          }
        }
        this.navScrollTop = (i / this.scrollItemPositionNum).toFixed(6) * 100 + '%'

        console.log(tempScrollTop)
        console.log(this.navScrollTop)
      },

      openBrowser (url = '') {
        this.$ipcRenderer.send('open-browser-url', url)
      }
    }
  }
</script>

<style scoped>
  #configScrollPointer {
    width:15px; height:15px; right:-5px; margin-top:-6px; position:absolute; z-index:9; border-radius:50%; background:url(../../../../static/images/default/slide-pointer.png) no-repeat; background-size:100% 100%;
  }

  .config-nav-title {
    line-height:2.2em;
  }
  .config-nav-title > p {
    cursor:pointer;
  }
  .config-nav-title.active > p {
    color:#00d8ff; text-shadow:2px 2px 2px #000;
  }
  .config-item-title {
    line-height:2em; font-size:20px;
  }
</style>