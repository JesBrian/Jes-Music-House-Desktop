<template>
  <div @click.right="showAlertMenu" class="glass-bg box-show" style="width:100%; height:52px; position:relative; border-radius:4px;">
    <page-link url="/user" style="width:38px; height:38px; margin:6px 8px 0; float:left;">
      <img class="cube-bg box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:100%; height:100%; padding:2px;"/>
    </page-link>
    <page-link url="/user" class="text-hidden" style="max-width:68%; padding-right:63px; line-height:48px;">The name of the user The name of the user The name of the user The name of the user</page-link>
    <div class="super-btn-out" style="width:32px; height:32px; top:8px; right:8px; position:absolute;">
      <span class="super-btn-in mh-if non-colloection" style="width:27px; height:27px; line-height:26px; font-size:23px;"></span>
    </div>
  </div>
</template>

<script>
  import { mouseCoords } from '../../../../assets/js/commom.js'

  export default {
    name: 'UserItem',

    methods: {
      showAlertMenu (event) {
        let position = mouseCoords(event)
        let alertMenuConf = {
          type: 'UserMenu',
          position: position
        }
        this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
      }
    }
  }
</script>

<style scoped>

</style>