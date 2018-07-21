<template>
  <div class="glass-bg box-show" style="width:288px; height:208px; top:54px; right:120px; position:fixed; border-radius:0 0 6px 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <div style="width:108px; height:26px; top:55%; left:50%; transform:translate(-50%,-50%); position:absolute; line-height:25px; text-align:center;">
        <div @click="changeContentType()" :class="contentType === 'theme' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:left; border-radius:13px 0 0 13px; cursor:pointer;">主题</div>
        <div @click="changeContentType('color')" :class="contentType === 'color' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:left; border-radius:0 13px 13px 0; cursor:pointer;">纯色</div>
      </div>
    </div>

    <div style="width:100%; height:168px;">
      <div v-show="contentType === 'theme'" style="width:100%; height:100%; text-align:center;">
        <div @click="changeTheme()" class="glass-bg" style="width:42%; height:65px; margin:7px 6px 0; padding:2px; display:inline-block; background:lightpink; position:relative; border-radius:0; cursor:pointer;">
          <div class="glass-bg" style="width:100%; height:22px; left:0; bottom:0; position:absolute; border-radius:0; opacity:0.9; line-height:20px;">酷炫黑蓝</div>
        </div>
        <div @click="changeTheme()" class="glass-bg" style="width:42%; height:65px; margin:7px 6px 0; padding:2px; display:inline-block; background:lightseagreen; position:relative; border-radius:0; cursor:pointer;">
          <div class="glass-bg" style="width:100%; height:22px; left:0; bottom:0; position:absolute; border-radius:0; opacity:0.9; line-height:22px;">晶莹白蓝</div>
        </div>
        <div @click="changeTheme()" class="glass-bg" style="width:42%; height:65px; margin:7px 6px 0; padding:2px; display:inline-block; background:lightpink; position:relative; border-radius:0; cursor:pointer;">
          <div class="glass-bg" style="width:100%; height:22px; left:0; bottom:0; position:absolute; border-radius:0; opacity:0.9; line-height:20px;">酷炫黑蓝</div>
        </div>
        <div @click="changeTheme()" class="glass-bg" style="width:42%; height:65px; margin:7px 6px 0; padding:2px; display:inline-block; background:lightseagreen; position:relative; border-radius:0; cursor:pointer;">
          <div class="glass-bg" style="width:100%; height:22px; left:0; bottom:0; position:absolute; border-radius:0; opacity:0.9; line-height:22px;">晶莹白蓝</div>
        </div>
      </div>

      <div v-show="contentType === 'color'" style="width:100%; height:100%;">

        <div style="width:86%; height:68px; margin:18px auto;">
          <div class="cube-bg box-show" style="width:48px; height:48px; margin:10px 8px 0 15px; padding:4px; float:left;">
            <div style="width:100%; height:100%; background:lightskyblue;"></div>
          </div>
          <div @click="clickColorBar" ref="colorBar" class="box-show" style="width:148px; height:6px; margin:19.5px 16px 0 0; position:relative; float:right; border-radius:3px; background-image:linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #00FFFF, #0000FF, #8B00FF); cursor:pointer;">
            <div @mousedown="dragColorPointer" :style="{'left' : `${colorRate * 100}%`}" style="width:16px; height:16px; top:-5px; margin-left:-10px; position:absolute; border-radius:50%; background:url(../../../../../../../static/images/default/slide-pointer.png) no-repeat; background-size:100% 100%;"></div>
          </div>
          <div @click="clickLightBar" ref="lightBar" class="box-show" style="width:148px; height:6px; margin:19.5px 16px 0 0; position:relative; float:right; border-radius:3px; background-image:linear-gradient(to right, #000, #00D8FF, #FFF); cursor:pointer;">
            <div @mousedown="dragLightPointer" :style="{'left' : `${lightRate * 100}%`}" style="width:16px; height:16px; top:-5px; margin-left:-10px; position:absolute; border-radius:50%; background:url(../../../../../../../static/images/default/slide-pointer.png) no-repeat; background-size:100% 100%;"></div>
          </div>
        </div>

        <div style="width:100%; text-align:center;">
          <div class="super-btn-out" style="width:76px; height:28px; margin:0 23px;">
            <span class="super-btn-in mh-if cancel" style="width:68px; height:21px; line-height:21px;"> 取消</span>
          </div>
          <div class="super-btn-out" style="width:76px; height:28px; margin:0 23px;">
            <span class="super-btn-in mh-if makesure" style="width:68px; height:21px; line-height:21px;"> 确定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mouseCoords, getElemenPosion } from '../../../../../assets/js/commom.js'

  export default {
    name: 'ChooseTheme',

    data () {
      return {
        contentType: 'theme', // theme / color
        colorRate: 0.60,
        lightRate: 0.5
      }
    },

    methods: {
      changeContentType (type = 'theme') {
        this.contentType = type
      },

      /**
       * 选择主题
       */
      changeTheme () {
        this.$parent.closeShowContent() // 关闭顶部导航栏弹出内容
      },

      /**
       * 点击颜色条
       */
      clickColorBar () {
        let mousePos = mouseCoords(event)
        let x = mousePos.x
        let x1 = getElemenPosion(this.$refs['colorBar'], 'left')
        this.changeColorRate(x - x1)
      },
      dragColorPointer (event) {
        let x1 = getElemenPosion(this.$refs['colorBar'], 'left')
        // 注册document的mousemove事件
        document.onmousemove = (ev) => {
          let oEvent = ev || event
          let mousePos = mouseCoords(oEvent)
          let x = mousePos.x
          this.changeColorRate(x - x1)
        }

        // 鼠标放开清除事件
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      },
      changeColorRate (colorRate = 0) {
        if (colorRate < 0 || colorRate > 148) {
          return false
        }
        this.colorRate = colorRate / 148
      },

      /**
       * 点击亮度条
       */
      clickLightBar (event) {
        let mousePos = mouseCoords(event)
        let x = mousePos.x
        let x1 = getElemenPosion(this.$refs['lightBar'], 'left')
        this.changeLightRate(x - x1)
        console.log(x - x1)
      },
      dragLightPointer (event) {
        let x1 = getElemenPosion(this.$refs['lightBar'], 'left')
        // 注册document的mousemove事件
        document.onmousemove = (ev) => {
          let oEvent = ev || event
          let mousePos = mouseCoords(oEvent)
          let x = mousePos.x
          this.changeLightRate(x - x1)
        }

        // 鼠标放开清除事件
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
        }
      },
      changeLightRate (lightRate = 0) {
        if (lightRate < 0 || lightRate > 148) {
          return false
        }
        this.lightRate = lightRate / 148
      }
    }
  }
</script>

<style scoped>
  div.cube-bg {
    color:#EEE;
  }
</style>