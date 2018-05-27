<template>
  <div class="glass-bg box-show" style="width:238px; top:54px; right:188px; position:fixed; border-radius:0 0 6px 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <router-link to="/user" class="text-hidden" style="max-width:138px; margin-left:18px; display:inline-block; color:#DDD; line-height:48px; letter-spacing:0.68px; font-size:16px;">用户登录</router-link>
    </div>

    <div style=" padding:0 1px;">
      <div class="box-shadow" style="height:88px;"></div>

      <div class="box-shadow" style="margin-top:8px; text-align:center;">
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

  methods: {
    oauthLogin () {
      this.$store.commit('CHANGE_MODAL_TYPE', 'OauthLogin')
    }
  }
}
</script>

<style scoped>

</style>