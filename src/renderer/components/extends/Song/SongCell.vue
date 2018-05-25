<template>
  <div @click.right="showAlertMenu" style="width:100%; height:28px; line-height:28px;">
    <p>{{ index }}</p>
  </div>
</template>

<script>
import { mouseCoords } from '../../../assets/js/commom.js'

export default {
  name: 'SongCell',

  props: {
    index: Number
  },

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