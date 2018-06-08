<template>
  <div @click.right="showAlertMenu" class="glass-bg box-show" style="width:100%; height:52px; position:relative; border-radius:4px;">
    <page-link url="/play-list" style="width:38px; height:38px; margin:6px 8px 0; float:left;">
      <img class="cube-bg box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:100%; height:100%; padding:2px;"/>
    </page-link>
    <p>
      <page-link url="/play-list" class="text-hidden" style="padding:9px 0 0 0;">海域巡逻</page-link>
    </p>
    <page-link url="/play-list" class="text-hidden" style="line-height:1.2em; font-size:14px;">关注人数：歌曲数量：</page-link>
    <div class="super-btn-out" style="width:32px; height:32px; top:8px; right:8px; position:absolute;">
      <span class="super-btn-in mh-if non-colloection" style="width:27px; height:27px; line-height:26px; font-size:23px;"></span>
    </div>
  </div>
</template>

<script>
import { mouseCoords } from '../../../../assets/js/commom.js'

export default {
  name: 'PlayListItem',

  methods: {
    showAlertMenu (event) {
      let position = mouseCoords(event)
      let alertMenuConf = {
        type: 'PlayListMenu',
        position: position
      }
      this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
    }
  }
}
</script>

<style scoped>

</style>