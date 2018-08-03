<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'music-house',

    created () {
      // vuex + localForage

      this.clientConfig()
      this.userConfig()
    },

    methods: {
      /**
       * 客户端配置信息
       */
      clientConfig () {
        this.$localForage.getItem('config', (result, value) => {
          if (value) {
          }
        })
      },

      /**
       * 登录用户信息
       */
      userConfig () {
        this.$localForage.getItem('user', (result, value) => {
          if (value) { // 如果用户已经登陆了
            // 检验 localForage 所存的用户信息是否正确
            this.$http.post('verifyUserLogin', {
              userId: value.id,
              username: value.username
            }).then((response) => {
              if (response.data.state === '200') {
                this.$store.commit('SAVE_LOGIN_USER_INFO', value)
              } else {
                this.$localForage.setItem('user', null)
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        })
      }
    }
  }
</script>

<style>

</style>
