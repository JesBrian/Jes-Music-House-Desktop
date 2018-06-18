<template>
  <div @click.right="showAlertMenu" style="width:100%; height:53px;">
    <page-link url="/play-list" style="width:38px; height:38px; margin:8px 8px 0; float:left;">
      <img src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" class="box-show" style="width:100%; height:100%; padding:3px;" />
    </page-link>
    <page-link url="/play-list" style="line-height:56px;">我的听歌排行</page-link>
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