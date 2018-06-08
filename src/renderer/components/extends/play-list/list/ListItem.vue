<template>
  <div @click.right="showAlertMenu" style="width:100%; height:58px;">
    <img src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" class="box-show" style="width:43px; height:43px; margin:8px 8px 0; padding:3px; float:left;" />
    <p style="line-height:58px;">我的听歌排行</p>
  </div>
</template>

<script>
import { mouseCoords } from '../../../../assets/js/commom.js'

export default {
  name: 'ListItem',

  methods: {
    showAlertMenu (event) {
      let position = mouseCoords(event)
      let alertMenuConf = {
        type: 'SongMenu',
        position: position
      }
      this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
    }
  }
}
</script>

<style scoped>

</style>