<template>
  <div style="width:100%; height:100%; top:0; left:0; position:fixed; z-index:9">
    <component :is="$store.state.AlertMenu.menuType" ref="alertMenuContent" :style="{'top': $store.state.AlertMenu.positionY + 'px', 'left': $store.state.AlertMenu.positionX + 'px'}" style="position:fixed;" />
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

  mounted () {
    // console.log(this.$refs['alertMenuContent'].$el.style.width + ' - ' + this.$refs['alertMenuContent'].$el.style.height)

    let elStyle = this.$refs['alertMenuContent'].$el.style
    let elT = Number(elStyle.top)
    let elL = Number(elStyle.left)
    let elH = Number(elStyle.Height)
    let elW = Number(elStyle.width)

    let html = document.documentElement
    let vx = html.clientWidth
    let vy = html.clientHeight

    if ((elT + elH) > vx) {
      this.$refs['alertMenuContent'].$el.style.top = (vx - elH) + 'px'
    }
    if ((elL + elW) > vy) {
      this.$refs['alertMenuContent'].$el.style.left = (vy - elW) + 'px'
    }
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