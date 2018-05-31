<template>
  <!-- 注册表单 -->
  <div>

    <div @click="changeContentType('ChooseContent')" class="super-btn-out" style="width:56px; height:23px; margin:5px 3px;">
      <span class="super-btn-in mh-if double-arrow-left" style="width:50px; height:18px; line-height:20px; font-size:13px;"> 返回</span>
    </div>

    <div style="width:88%; margin:5px auto 18px;">
      <label style="position:relative;">
        <i class="mh-if phone" style="top:-3px; left:4px; position:absolute; font-size:21px; color:#20DBFC;"></i>
        <input class="glass-bg" type="tel" style="width:100%; height:33px; padding:0 8px 0 28px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入手机号"/>
      </label>
      <label style="position:relative;">
        <i class="mh-if key" style="top:-3px; left:4px; position:absolute; font-size:21px; color:#20DBFC;"></i>
        <input class="glass-bg" type="password" style="width:100%; height:33px; margin-top:-1px; padding:0 8px 0 28px; border:none; border-radius:0; color:#20dbfc; font-size:15px; letter-spacing:1px;" placeholder="请输入密码"/>
      </label>
    </div>

    <div @click="changeContentType('CheckPhoneContent')" class="super-btn-out" style="width:88%; height:34px; margin:14px auto 0; display:block; border-radius:17px;">
      <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLoginRegisterContent',

  methods: {
    changeContentType (type) {
      this.$parent.changeContentType(type)
    }
  }
}
</script>

<style scoped>

</style>