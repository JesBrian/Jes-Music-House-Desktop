<template>
  <div @click.right="showAlertMenu" style="width:100%; height:28px; line-height:28px;">
    <p style="width:4%; padding-right:4px; float:left; box-sizing:border-box; text-align:right; font-size:14px; line-height:30px;">{{ index }}</p>
    <p style="width:12%; float:left; text-align:center;">
      <i class="mh-if play" style="margin:0 2px;"></i>
      <i class="mh-if non-colloection" style="margin:0 2px;"></i>
      <i class="mh-if download" style="margin:0 2px;"></i>
    </p>
    <p class="text-hidden" style="width:48%; padding:0 8px 0 3px; float:left; box-sizing:border-box;">66</p>
    <p class="text-hidden" style="width:25%; float:left;">66</p>
    <p style="width:10%; float:left; text-align:center;">59:59</p>
  </div>
</template>

<script>
  import { mouseCoords } from '../../../assets/js/commom.js'

  export default {
    name: 'DownloadedItem',

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