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

      // 如果用户已经登陆了
      if (userInfo) {
        // 检验 localStore 所存的用户信息是否正确
        this.$http.post('verifyUserLogin', {
          userId: userInfo.id,
          username: userInfo.username
        }).then((response) => {
          if (response.data.state === '200') {
            this.$store.commit('SAVE_LOGIN_USER_INFO', userInfo)
          } else {
            localStore.remove('user')
          }
        }).catch((error) => {
          console.log(error)
        })
      }

      let musicInfo = localStore.get('music')
      if (musicInfo) {
      }
    }
  }
</script>

<style>

</style>
