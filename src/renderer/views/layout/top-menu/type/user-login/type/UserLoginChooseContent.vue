<template>
  <!-- 选择按钮 -->
  <div style="padding-top:38px;">
    <div @click="changeContentType('LoginContent')" class="super-btn-out" style="width:88%; height:34px; margin:0 auto 18px; display:block; border-radius:17px;">
      <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">手机号登录</span>
    </div>
    <div @click="changeContentType('RegisterContent')" class="super-btn-out" style="width:88%; height:34px; margin:0 auto 18px; display:block; border-radius:17px;">
      <span class="super-btn-in" style="width:95%; height:26px; top:48%; border-radius:13px; line-height:28px; font-size:18px;">注册</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserLoginChooseContent',

    methods: {
      changeContentType (type) {
        this.$parent.changeContentType(type)
      }
    }
  }
</script>

<style scoped>

</style>