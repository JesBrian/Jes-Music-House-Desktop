<template>
  <div>
    <page-link url="/play-list" class="cube-bg box-show" style="width:138px; height:138px; margin:0 0 8px 23px; padding:2px; position:relative;">
      <img @click.right="showAlertMenu" v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
      <div @click.right="showAlertMenu" class="glass-bg" style="width:138px; height:30px; left:-1px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#999;">
        <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656
      </div>
    </page-link>
    <i class="mh-if play"></i>
    <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
      <page-link url="/play-list">c4s成8识vg删除yr54</page-link>
    </p>
    <p class="text-hidden" style="width:138px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
      <span style="float:left; margin:-1px 8px 0 0;">by</span>
      <page-link url="/singer" style="color:#AAA;">JesBrian</page-link>
    </p>
  </div>
</template>

<script>
import PageLink from '../../global/page-link/PageLink.vue'

import { mouseCoords } from '../../../assets/js/commom.js'

export default {
  name: 'AlbumCell',

  components: {
    PageLink
  },

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
  .mh-if {
    top:115px; left:139px; position:absolute; color:#999; display:none;
  }
  div:hover > .mh-if {
    display:inline-block;
  }
  div:hover>.mh-if:hover {
    color:#20dbfc;
  }
</style>