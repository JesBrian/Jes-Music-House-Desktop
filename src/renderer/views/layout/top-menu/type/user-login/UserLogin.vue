<template>
  <div v-if="$store.state.User.id === '0'" class="glass-bg box-show" style="width:238px; top:54px; right:218px; position:fixed; border-radius:0 0 6px 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <p class="text-hidden" style="max-width:138px; margin-left:18px; display:inline-block; color:#DDD; line-height:48px; letter-spacing:0.68px; font-size:16px;">用户登录</p>
    </div>

    <div style=" padding:0 1px;">

      <!-- 登录/注册 -->
      <div class="box-shadow" style="height:188px;">
        <component :is="'UserLogin' + contentType" />
      </div>

      <!-- 第三方登录 -->
      <div class="box-shadow" style="margin:15px 0 13px; position:relative; text-align:center;">

        <span style="top:-22px; left:50%; padding:0 8px; position:absolute; transform:translateX(-50%); z-index:9; background:#111;">其他登录方式</span>

        <div style="height:53px; padding:0 6px; margin-bottom:8px;">
          <div style="width:33%; height:100%; float:left;">
            <div @click="oauthLogin('qq')" class="super-btn-out" title="QQ" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:34%; height:100%; float:left; box-sizing:border-box;">
            <div @click="oauthLogin('wechat')" class="super-btn-out" title="WeChat" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:33%; height:100%; float:left;">
            <div @click="oauthLogin('weibo')" class="super-btn-out" title="WeiBo" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
        </div>
        <div style="height:53px; padding:0 6px; margin-bottom:8px;">
          <div style="width:33%; height:100%; float:left;">
            <div @click="oauthLogin('baidu')" class="super-btn-out" title="BaiDu" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:34%; height:100%; float:left; box-sizing:border-box;">
            <div @click="oauthLogin('gitee')" class="super-btn-out" title="Gitee" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
          <div style="width:33%; height:100%; float:left;">
            <div @click="oauthLogin('github')" class="super-btn-out" title="Github" style="width:38px; height:38px; margin-top:7px;">
              <span class="super-btn-in" style="width:29px; height:29px;"></span>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import UserLoginCheckPhoneContent from './type/UserLoginCheckPhoneContent.vue'
  import UserLoginChooseContent from './type/UserLoginChooseContent.vue'
  import UserLoginLoginContent from './type/UserLoginLoginContent.vue'
  import UserLoginRegisterContent from './type/UserLoginRegisterContent.vue'

  export default {
    name: 'UserLogin',

    components: {
      UserLoginRegisterContent, UserLoginLoginContent, UserLoginChooseContent, UserLoginCheckPhoneContent
    },

    data () {
      return {
        contentType: 'ChooseContent'
      }
    },

    methods: {
      changeContentType (type = 'ChooseContent') {
        this.contentType = type
      },

      oauthLogin (oauthType = '') {
        this.$store.commit('CHANGE_OAUTH_TYPE', oauthType)
        this.$store.commit('CHANGE_MODAL_TYPE', 'OauthLogin')
      }
    }
  }
</script>

<style scoped>

</style>