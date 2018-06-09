<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import localStore from 'store'

  export default {
    name: 'music-house',

    mounted () {
      //  vuex + localStorage 实现保存登录用户信息
      let userInfo = localStore.get('user')
      if (userInfo) {
        this.$store.commit('SAVE_LOGIN_USER_INFO', userInfo)
      }
    }
  }
</script>

<style>

</style>
