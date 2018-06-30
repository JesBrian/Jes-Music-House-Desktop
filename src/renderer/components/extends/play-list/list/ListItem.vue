<template>
  <div @click.right="showAlertMenu" style="width:100%; height:53px; padding:0 8px; box-sizing:border-box; line-height:56px;">
    <page-link url="/play-list" style="width:38px; height:38px; margin:8px 8px 0; float:left;">
      <img src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" class="box-show" style="width:100%; height:100%; padding:3px;" />
    </page-link>
    <p style="width:38%; height:100%; float:left;">
      <page-link url="/play-list">我的听歌排行</page-link>
    </p>
    <p style="width:18%; height:100%; float:left;">
      歌曲：xxx首
    </p>
    <p style="width:18%; height:100%; float:left;">
      by JesBrian
    </p>
    <p style="width:18%; height:100%; float:left;">
      <i class="mh-if non-colloection"></i> 123456
    </p>
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