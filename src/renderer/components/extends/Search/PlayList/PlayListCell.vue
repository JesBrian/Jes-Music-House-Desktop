<template>
  <div @click.right="showAlertMenu" class="glass-bg box-show" style="width:100%; height:52px; position:relative; border-radius:4px;">
    <img class="cube-bg box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:38px; height:38px; margin:6px 8px 0; padding:2px; float:left;"/>
    <p class="text-hidden" style="padding:8px 63px 2px 0;">The name of the playlistThe name of the playlistThe name of the playlistThe name of the playlistThe name of the playlistThe name of the playlistThe name of the playlistThe name of the playlistThe name of the playlistThe name of the playlistThe name of the playlist</p>
    <p class="text-hidden" style="padding-right:63px; font-size:14px;">Singer</p>
    <div class="super-btn-out" style="width:32px; height:32px; top:8px; right:8px; position:absolute;">
      <span class="super-btn-in mh-if non-colloection" style="width:27px; height:27px; line-height:26px; font-size:23px;"></span>
    </div>
  </div>
</template>

<script>
import { mouseCoords } from '../../../../assets/js/commom.js'

export default {
  name: 'PlayListCell',

  methods: {
    showAlertMenu (event) {
      let position = mouseCoords(event)
      let alertMenuConf = {
        type: 'PlayListMenu',
        position: position
      }
      this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
    }
  }
}
</script>

<style scoped>

</style>