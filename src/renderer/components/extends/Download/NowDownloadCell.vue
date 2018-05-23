<template>
  <div @click.right="showAlertMenu" style="height:28px; box-sizing:border-box; padding:0 23px 0 13px; line-height:28px;">
    123
    <i class="mh-if trash" style="float:right;"></i>
  </div>
</template>

<script>
import { mouseCoords } from '../../../assets/js/commom.js'

export default {
  name: 'NowDownloadCell',

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