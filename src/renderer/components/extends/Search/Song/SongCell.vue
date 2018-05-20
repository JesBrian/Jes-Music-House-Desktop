<template>
  <div @click.right="showAlertMenu" class="" style="height:43px;">

  </div>
</template>

<script>
import { mouseCoords } from '../../../../assets/js/commom.js'

export default {
  name: 'SongCell',

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