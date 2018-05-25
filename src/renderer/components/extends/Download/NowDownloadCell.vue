<template>
  <div @click.right="showAlertMenu" style="height:28px; box-sizing:border-box; padding:0 23px 0 13px; line-height:28px;">
    <p style="width:33px; height:28px; float:left; text-align:right;">{{ index }}</p>
    <p style="width:54%; height:28px; float:left; text-indent:1.2em;">123</p>
    <p style="width:35%; display:inline-block;">
      <span class="box-show" style="width:78%; height:10px; margin-top:9px; float:left; display:inline-block; position:relative; border-radius:5px;">
        <span class="super-btn-out" style="width:68%; height:80%; top:0; left:0; display:inline-block; position:absolute; border-radius:5px;"></span>
      </span>
      <span style="margin-top:2px; float:right; font-size:14px; color:#AAA;">1 KB/S</span>
    </p>
    <i class="mh-if trash" style="float:right;"></i>
  </div>
</template>

<script>
import { mouseCoords } from '../../../assets/js/commom.js'

export default {
  name: 'NowDownloadCell',

  props: {
    index: Number
  },

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