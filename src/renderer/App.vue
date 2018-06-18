<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import localStore from 'store'
  import localForage from 'localforage'

  export default {
    name: 'music-house',

    mounted () {
      // vuex + localStorage

      // localForage.setItem('users', '666', (result) => {
      //
      // })
      localForage.getItem('users', (result, value) => {
        console.log(value)
      })

      // 客户端配置信息
      let configInfo = localStore.get('config')
      if (configInfo) {
      }

      // 登录用户信息
      let userInfo = localStore.get('user')
      if (userInfo) { // 如果用户已经登陆了
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
