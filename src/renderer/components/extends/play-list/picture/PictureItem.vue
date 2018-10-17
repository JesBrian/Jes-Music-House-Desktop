<template>
  <div style="width:20%; height:168px; margin:23px -4px 0 0; display:inline-block;">
    <div style="width:128px; height:100%; margin:0 auto;">
      <page-link url="/play-list/1" style="width:128px; height:128px;">
        <img @click.right="showAlertMenu" src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" class="box-show cube-bg" style="width:100%; height:100%; padding:4px;" />
      </page-link>
      <p class="text-hidden" style="width:100%; line-height:1.8em;">
        <page-link url="/play-list/1">Name PlayList</page-link>
      </p>
      <p style="font-size:12.5px;">
        <page-link url="/play-list/1" style="color:#999;">XX 首</page-link>
      </p>
    </div>
  </div>
</template>

<script>
  import { mouseCoords } from '../../../../assets/js/commom.js'

  export default {
    name: 'PictureItem',

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