<template>
  <!-- 手机验证码验证 -->
  <div>

    <div @click="changeContentType('ChooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
      <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
    </div>

    <div style="width:88%; margin:18px auto;">
      <label style="position:relative;">
        <i class="mh-if code" style="top:-3px; left:4px; position:absolute; font-size:21px; color:#20DBFC;"></i>
        <input v-model.trim="identifyingCode" class="glass-bg" type="tel" style="width:58%; height:33px; padding:0 8px 0 28px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="填写验证码"/>
      </label>
      <div @click="getIdentifyingCodeAgain" class="super-btn-out" style="width:38%; height:33px; margin-top:-0.68px; float:right;">
        <span class="super-btn-in" style="width:90%; height:24px; line-height:26px;">
          {{ getIdentifyingCodeTips }}
        </span>
      </div>
    </div>

    <div @click="checkIdentifyingCode" class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
      <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">下一步</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLoginCheckPhoneContent',

  data () {
    return {
      identifyingCode: '',
      getIdentifyingCodeTime: 59,
      getIdentifyingCodeTimer: null
    }
  },

  mounted () {
    this.getIdentifyingCodeTimer = setInterval(() => {
      --this.getIdentifyingCodeTime
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
      if (this.getIdentifyingCodeTime === 60 || this.getIdentifyingCodeTime === 0) {
        return '重新获取'
      }
      return this.getIdentifyingCodeTime + 'S'
    }
  },

  methods: {
    changeContentType (type) {
      this.$parent.changeContentType(type)
    },

    getIdentifyingCodeAgain () {
      if (this.getIdentifyingCodeTime > -1 && this.getIdentifyingCodeTime < 60) {
        return false
      }
      this.getIdentifyingCodeTimer = setInterval(() => {
        --this.getIdentifyingCodeTime
        if (this.getIdentifyingCodeTime === 0) {
          clearInterval(this.getIdentifyingCodeTimer)
          this.getIdentifyingCodeTime = 60
        }
      }, 1000)
    },

    checkIdentifyingCode () {
      if (this.identifyingCode === '') {
        return false
      }
      let data = {
        identifyingCode: this.identifyingCode
      }
      this.$http.post('createUser', data).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>