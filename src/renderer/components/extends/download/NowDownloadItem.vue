<template>
  <div @click.right="showAlertMenu" style="width:100%; height:28px; line-height:28px;">
    <p style="width:4.5%; height:28px; float:left; text-align:right;">{{ index }}</p>
    <p style="width:52%; height:28px; float:left; text-indent:1.8em;">123</p>
    <p style="width:43%; display:inline-block;">
      <span class="box-show" style="width:68%; height:10px; margin-top:9px; float:left; display:inline-block; position:relative; border-radius:5px;">
        <span class="super-btn-out" style="width:68%; height:80%; top:0; left:0; display:inline-block; position:absolute; border-radius:5px;"></span>
      </span>

      <span style="margin:2px 0 0 18px; font-size:14px; color:#AAA;">1 KB/S</span>

      <i class="mh-if trash" style="margin-right:12px; float:right;"></i>
    </p>
  </div>
</template>

<script>
  import { mouseCoords } from '../../../assets/js/commom.js'

  export default {
    name: 'NowDownloadItem',

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