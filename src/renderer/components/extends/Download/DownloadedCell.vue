<template>
  <div @click.right="showAlertMenu" style="height:28px; box-sizing:border-box; padding:0 23px 0 13px; line-height:28px;">
    <p style="width:33px; height:28px; float:left; text-align:right;">123</p>
    <p style="width:48%; height:28px; float:left; text-indent:1.2em;">123</p>
  </div>
</template>

<script>
import { mouseCoords } from '../../../assets/js/commom.js'

export default {
  name: 'DownloadedCell',

  methods: {
    showAlertMenu () {
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