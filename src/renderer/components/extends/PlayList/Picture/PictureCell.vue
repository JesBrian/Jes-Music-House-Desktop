<template>
  <div style="width:128px; height:100%; margin:0 auto;">
    <img @click.right="showAlertMenu" src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" class="box-show cube-bg" style="width:100%; height:128px; padding:4px;" />
    <p class="text-hidden" style="width:100%; line-height:1.8em;">This is PlayList Name</p>
    <p style="font-size:12.5px; color:#999;">XX 首</p>
  </div>
</template>

<script>
import { mouseCoords } from '../../../../assets/js/commom.js'

export default {
  name: 'PictureCell',

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