<template>
  <!-- 登录表单 -->
  <div>

    <div @click="changeContentType('ChooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
      <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
    </div>
    <span @click="openBrowser('http://music.jesbrian.cn/#/retrievePasswd')" style="float:right;">忘记密码</span>

    <div @keyup.enter="userLogin" style="width:88%; margin:5px auto 18px;">
      <label style="position:relative;">
        <i class="mh-if phone" style="top:-3px; left:4px; position:absolute; font-size:21px; color:#20DBFC;"></i>
        <input v-model.trim="phone" class="glass-bg" type="tel" style="width:100%; height:33px; padding:0 8px 0 28px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入手机号"/>
      </label>
      <label style="position:relative;">
        <i class="mh-if key" style="top:-3px; left:4px; position:absolute; font-size:21px; color:#20DBFC;"></i>
        <input v-model.trim="passwd" class="glass-bg" type="password" style="width:100%; height:33px; margin-top:-1px; padding:0 8px 0 28px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入密码"/>
      </label>
    </div>

    <div @click="userLogin" class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
      <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">登录</span>
    </div>
  </div>
</template>

<script>
  import { closeCloverComponent } from '../../../../../../assets/js/commom.js'
  import { validateInfoByReg } from '../../../../../../assets/js/utils/validateInfo.js'

  export default {
    name: 'UserLoginLoginContent',

    data () {
      return {
        phone: '',
        passwd: ''
      }
    },

    methods: {
      userLogin () {
        if (validateInfoByReg('phone', this.phone) === false) {
          this.$store.commit('SHOW_TIPS', {msg: '请填写正确的手机号码', type: 'warning'})
          return false
        }
        if (validateInfoByReg('passwd', this.passwd) === false) {
          this.$store.commit('SHOW_TIPS', {msg: '密码必须为4位以上的数字或字母搭配', type: 'warning'})
          return false
        }

        this.$http.post('phoneLogin', {
          phone: this.phone,
          passwd: this.passwd
        }).then((response) => {
          let result = response.data
          let tipsType = 'warning'

          if (result.state === '200') {
            tipsType = 'info'
            this.$localForage.setItem('user', result.data)
            closeCloverComponent(this)
            this.$store.commit('SAVE_LOGIN_USER_INFO', result.data)
          }
          this.$store.commit('SHOW_TIPS', {msg: result.msg, type: tipsType})
        }).catch((error) => {
          console.error(error)
        })
      },

      changeContentType (type) {
        this.$parent.changeContentType(type)
      },

      openBrowser (url = '') {
        this.$ipcRenderer.send('open-browser-url', url)
      }
    }
  }
</script>

<style scoped>

</style>