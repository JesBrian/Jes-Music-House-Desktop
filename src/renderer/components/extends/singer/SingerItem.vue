<template>
  <div @click.right="showAlertMenu" style="margin-bottom:28px; padding:0 16px 18px; box-sizing:border-box;">
    <page-link url="/singer" style="width:142px; height:142px;">
      <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="cube-bg box-show" style="width:100%; height:100%; padding:5px;"/>
    </page-link>
    <page-link url="/singer" class="text-hidden" style="max-width:100%; float:left; display:inline-block; line-height:1.5em;">Jason Chan</page-link>
  </div>
</template>

<script>
  import { mouseCoords } from '../../../assets/js/commom.js'

  export default {
    name: 'SingerItem',

    methods: {
      showAlertMenu (event) {
        let position = mouseCoords(event)
        let alertMenuConf = {
          type: 'SingerMenu',
          position: position
        }
        this.$store.commit('SHOW_ALERT_MENU', alertMenuConf)
      }
    }
  }
</script>

<style scoped>

</style>