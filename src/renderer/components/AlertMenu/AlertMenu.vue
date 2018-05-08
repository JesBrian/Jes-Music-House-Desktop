<template>
  <div v-if="$store.state.AlertMenu.menuType" style="width:100%; height:100%; top:0; left:0; position:fixed; z-index:9">
    <component :is="$store.state.AlertMenu.menuType" style="top:50%; left:50%; transform:translate(-50%, -50%); position:fixed;" />
    <div @click="closeAlertMenu" style="width:100%; height:100%; background:transparent;"></div>
  </div>
</template>

<script>
import SongMenu from './type/SongMenu.vue'
import PlayListMenu from './type/PlayListMenu.vue'

export default {
  name: 'AlertMenu',

  components: {
    SongMenu, PlayListMenu
  },

  methods: {
    closeAlertMenu () {
      this.$store.commit('SHOW_ALERT_MENU')
    }
  }
}
</script>

<style scoped>

</style>