<template>
  <div style="padding:8px 0 0;">
    <div style="width:18%; float:left;">
      <page-link url="/play-list" style="width:108px; height:108px; margin:28px auto 0; display:block;">
        <img @click.right="showAlertMenu('PlayListMenu')" class="cube-bg box-show" src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" style="width:100%; height:100%; padding:4px;" />
      </page-link>
    </div>
    <div style="width:80%; margin:8px 0; display:inline-block;">
      <p class="text-hidden" style="margin-bottom:8px;">
        <page-link url="/plsy-list">
          The Name of the PlayList
        </page-link>
        <i class="mh-if play" style="margin:0 12px 0 6px; float:right;"></i>
        <i class="mh-if non-colloection" style="margin:0 12px 0 6px; float:right;"></i>
      </p>
      <ul class="box-show">
        <li v-for="n in 5" class="box-shadow" style="padding:2px 0;">
          <div @click.right="showAlertMenu('SongMenu')" style="width:100%; height:28px; line-height:28px; text-align:center;">
            <p style="width:6%; float:left;">{{ n }}</p>
            <p style="width:10%; float:left;">
              <i class="mh-if play" style="margin:0 3px;"></i>
              <i class="mh-if non-colloection" style="margin:0 3px;"></i>
              <i class="mh-if download" style="margin:0 3px;"></i>
            </p>
            <P style="width:68%; float:left; text-indent:1.5em; text-align:left;">The Name of this Song</P>
            <p style="width:12%; float:left;">00:00</p>
          </div>
        </li>
      </ul>
      <page-link url="/play-list" style="line-height:2.8em; font-size:13px; color:#999;">查看全部135首</page-link>
    </div>
  </div>
</template>

<script>
  import { mouseCoords } from '../../../../assets/js/commom.js'

  export default {
    name: 'PictureListItem',

    methods: {
      showAlertMenu (type) {
        let position = mouseCoords(event)
        let alertMenuConf = {
          type: type,
          position: position
        }
        this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
      }
    }
  }
</script>

<style scoped>

</style>