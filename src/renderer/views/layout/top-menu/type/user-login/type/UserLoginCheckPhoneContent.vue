<template>
  <!-- 手机验证 -->
  <div>

    <div @click="changeContentType('ChooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
      <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
    </div>

    <div style="width:88%; margin:18px auto;">
      <input class="glass-bg" type="tel" style="width:58%; height:33px; padding:0 10px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="填写验证码"/>
      <div @click="getIdentifyingCodeAgain" class="super-btn-out" style="width:38%; height:33px; margin-top:-0.68px; float:right;">
        <span class="super-btn-in" style="width:90%; height:24px; line-height:26px;">
          {{ getIdentifyingCodeTips }}
        </span>
      </div>
    </div>

    <div class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
      <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">下一步</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLoginCheckPhoneContent',

  data () {
    return {
      getIdentifyingCodeTime: 60,
      getIdentifyingCodeTimer: null
    }
  },

  mounted () {
    this.getIdentifyingCodeTimer = setInterval(() => {
      --this.getIdentifyingCodeTime
      console.log(this.getIdentifyingCodeTime)
      if (this.getIdentifyingCodeTime === 0) {
        clearInterval(this.getIdentifyingCodeTimer)
        this.getIdentifyingCodeTime = 60
      }
    }, 1000)
  },

  beforeDestroy () {
    clearInterval(this.getIdentifyingCodeTimer)
  },

  computed: {
    getIdentifyingCodeTips () {
      if (this.getIdentifyingCodeTime === 60) {
        return '重新获取'
      }
      return this.getIdentifyingCodeTime + 'S'
    }
  },

  methods: {
    getIdentifyingCodeAgain () {
      if (this.getIdentifyingCodeTime > 0) {
        return false
      }

      this.getIdentifyingCodeTimer = setInterval(() => {
        --this.getIdentifyingCodeTime
        console.log(this.getIdentifyingCodeTime)
        if (this.getIdentifyingCodeTime === 0) {
          clearInterval(this.getIdentifyingCodeTimer)
          this.getIdentifyingCodeTime = 60
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>