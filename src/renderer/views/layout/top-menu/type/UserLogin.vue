<template>
  <div class="glass-bg box-show" style="width:238px; top:54px; right:188px; position:fixed; border-radius:0 0 6px 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <router-link to="/user" class="text-hidden" style="max-width:138px; margin-left:18px; display:inline-block; color:#DDD; line-height:48px; letter-spacing:0.68px; font-size:16px;">用户登录</router-link>
    </div>

    <div style=" padding:0 1px;">

      <!-- 登录/注册 -->
      <div class="box-shadow" style="height:188px;">
        <!-- 选择按钮 -->
        <div v-if="formType === 'chooseContent'" style="padding-top:38px;">
          <div @click="changeFormType('loginContent')" class="super-btn-out" style="width:88%; height:34px; margin:0 auto 18px; display:block; border-radius:17px;">
            <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">手机号登录</span>
          </div>
          <div @click="changeFormType('registerContent')" class="super-btn-out" style="width:88%; height:34px; margin:0 auto 18px; display:block; border-radius:17px;">
            <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">注册</span>
          </div>
        </div>

         <!-- 登录表单 -->
        <div v-else-if="formType === 'loginContent'">

          <div @click="changeFormType('chooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
            <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
          </div>

          <div style="width:88%; margin:5px auto 18px;">
            <input class="glass-bg" type="tel" style="width:100%; height:33px; padding:0 10px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入手机号"/>
            <input class="glass-bg" type="password" style="width:100%; height:33px; margin-top:-1px; padding:0 10px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入密码"/>
          </div>

          <div class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
            <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">登录</span>
          </div>
        </div>

        <!-- 注册表单 -->
        <div v-else-if="formType === 'registerContent'">

          <div @click="changeFormType('chooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
            <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
          </div>

          <div style="width:88%; margin:5px auto 18px;">
            <input class="glass-bg" type="tel" style="width:100%; height:33px; padding:0 10px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入手机号"/>
            <input class="glass-bg" type="password" style="width:100%; height:33px; margin-top:-1px; padding:0 10px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入密码"/>
          </div>

          <div @click="changeFormType('checkPhoneContent')" class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
            <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">注册</span>
          </div>
        </div>

        <!-- 手机验证 -->
        <div v-else-if="formType === 'checkPhoneContent'">

          <div @click="changeFormType('chooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
            <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
          </div>

          <div style="width:88%; margin:5px auto 18px;">
            <input class="glass-bg" type="tel" style="width:58%; height:33px; padding:0 10px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="填写验证码"/>
            <div class="super-btn-out" style="width:38%; height:33px; margin-top:-0.68px; float:right;">
              <span class="super-btn-in" style="width:90%; height:24px; line-height:26px;">重新获取</span>
            </div>
          </div>

          <div class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
            <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">下一步</span>
          </div>
        </div>

      </div>

      <!-- 第三方登录 -->
      <div class="box-shadow" style="margin:15px 0 13px; position:relative; text-align:center;">

        <span style="top:-22px; left:50%; padding:0 8px; position:absolute; transform:translateX(-50%); z-index:9; background:#111;">其他登录方式</span>

        <div style="height:53px; padding:0 6px; margin-bottom:8px;">
          <div style="width:33%; height:100%; float:left;">
            <div class="super-btn-out" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:34%; height:100%; float:left; box-sizing:border-box;">
            <div class="super-btn-out" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:33%; height:100%; float:left;">
            <div class="super-btn-out" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
        </div>
        <div style="height:53px; padding:0 6px; margin-bottom:8px;">
          <div style="width:33%; height:100%; float:left;">
            <div class="super-btn-out" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:34%; height:100%; float:left; box-sizing:border-box;">
            <div class="super-btn-out" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:33%; height:100%; float:left;">
            <div @click="oauthLogin" class="super-btn-out" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'UserLogin',

  data () {
    return {
      formType: 'chooseContent'
    }
  },

  methods: {
    changeFormType (type = 'chooseContent') {
      this.formType = type
    },

    oauthLogin () {
      this.$store.commit('CHANGE_MODAL_TYPE', 'OauthLogin')
    }
  }
}
</script>

<style scoped>

</style>