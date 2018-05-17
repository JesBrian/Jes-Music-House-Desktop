<template>
  <div style="width:100%; height:168px;">
    <img src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" style="width:108px; height:108px;" />
  </div>
</template>

<script>
import { mouseCoords } from '../../../assets/js/commom.js'

export default {
  name: 'PictureListCell',

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