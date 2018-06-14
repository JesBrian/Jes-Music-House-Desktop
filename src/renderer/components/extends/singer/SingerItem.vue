<template>
  <div @click.right="showAlertMenu" style="margin-bottom:28px; padding:0 16px 18px; box-sizing:border-box;">
    <page-link url="/singer" style="width:142px; height:142px;">
      <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3180475765,1545941947&fm=58&bpow=450&bpoh=600" class="cube-bg box-show" style="width:100%; height:100%; padding:5px;"/>
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