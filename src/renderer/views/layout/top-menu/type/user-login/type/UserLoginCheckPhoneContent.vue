<template>
  <!-- 手机验证码验证 -->
  <div>

    <div @click="changeContentType('ChooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
      <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
    </div>

    <div @keyup.enter="checkIdentifyCode" style="width:88%; margin:18px auto;">
      <label style="position:relative;">
        <i class="mh-if code" style="top:-3px; left:4px; position:absolute; font-size:21px; color:#20DBFC;"></i>
        <input v-model.trim="identifyCode" class="glass-bg" type="tel" style="width:58%; height:33px; padding:0 8px 0 28px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="填写验证码"/>
      </label>
      <div @click="getIdentifyCodeAgain" class="super-btn-out" style="width:38%; height:33px; margin-top:-0.68px; float:right;">
        <span class="super-btn-in" style="width:90%; height:24px; line-height:26px;">
          {{ getIdentifyCodeTips }}
        </span>
      </div>
    </div>

    <div @click="checkIdentifyCode" class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
      <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">下一步</span>
    </div>
  </div>
</template>

<script>
  import { closeCloverComponent } from '../../../../../../assets/js/commom.js'
  import { validateInfoByReg } from '../../../../../../assets/js/utils/validateInfo.js'

  export default {
    name: 'UserLoginCheckPhoneContent',

    data () {
      return {
        identifyCode: '',
        getIdentifyCodeTime: 59,
        getIdentifyCodeTimer: null
      }
    },

    mounted () {
      this.getIdentifyCodeTimer = setInterval(() => {
        --this.getIdentifyCodeTime
        if (this.getIdentifyCodeTime === 0) {
          clearInterval(this.getIdentifyCodeTimer)
          this.getIdentifyCodeTime = 60
        }
      }, 1000)
    },

    beforeDestroy () {
      clearInterval(this.getIdentifyCodeTimer)
    },

    computed: {
      getIdentifyCodeTips () {
        if (this.getIdentifyCodeTime === 60 || this.getIdentifyCodeTime === 0) {
          return '重新获取'
        }
        return this.getIdentifyCodeTime + 'S'
      }
    },

    methods: {
      changeContentType (type) {
        this.$parent.changeContentType(type)
      },

      getIdentifyCodeAgain () {
        if (this.getIdentifyCodeTime > -1 && this.getIdentifyCodeTime < 60) {
          return false
        }
        this.getIdentifyCodeTimer = setInterval(() => {
          --this.getIdentifyCodeTime
          if (this.getIdentifyCodeTime === 0) {
            clearInterval(this.getIdentifyCodeTimer)
            this.getIdentifyCodeTime = 60
          }
        }, 1000)
      },

      checkIdentifyCode () {
        if (validateInfoByReg('identifyCode', this.identifyCode) === false) {
          this.$store.commit('SHOW_TIPS', {msg: '验证码为4位数字', type: 'warning'})
          return false
        }

        let data = {
          identifyCode: this.identifyCode
        }
        this.$http.post('createUser', data).then((response) => {
          let result = response.data
          let tipsType = 'warning'
          if (result.state === '200') {
            tipsType = 'info'
            console.log(response.data)
            this.$localForage.setItem('user', result.data)
            closeCloverComponent(this)
            this.$store.commit('SAVE_LOGIN_USER_INFO', result.data)
          }
          this.$store.commit('SHOW_TIPS', {msg: result.msg, type: tipsType})
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>

</style>