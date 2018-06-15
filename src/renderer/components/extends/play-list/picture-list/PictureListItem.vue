<template>
  <div>
    <div style="width:18%; float:left;">
      <img @click.right="showAlertMenu('PlayListMenu')" class="cube-bg box-show" src="http://p1.music.126.net/wkon8FidWZUeUtBgXi-wOQ==/109951163288308673.jpg?param=140y140" style="width:108px; height:108px; margin:28px auto 0; padding:4px; display:block;" />
    </div>
    <div style="width:80%; margin:8px 0; display:inline-block;">
      <p style="margin-bottom:8px;">The Name of the PlayList</p>
      <ul class="box-show">
        <li v-for="n in 5" class="box-shadow" style="padding:2px 0;">
          <div @click.right="showAlertMenu('SongMenu')" style="width:100%; height:28px; line-height:28px;">
            <p>{{ n }}</p>
          </div>
        </li>
      </ul>
      <p style="line-height:2em;">查看全部135首</p>
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