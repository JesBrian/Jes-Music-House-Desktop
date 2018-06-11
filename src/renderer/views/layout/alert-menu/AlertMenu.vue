<template>
  <div style="width:100%; height:100%; top:0; left:0; position:fixed; z-index:9">
    <component :is="$store.state.AlertMenu.menuType" ref="alertMenuContent" :style="{'top': $store.state.AlertMenu.positionY + 'px', 'left': $store.state.AlertMenu.positionX + 'px'}" class="super-btn-out" style="position:fixed;" />
    <div @click="closeAlertMenu" style="width:100%; height:100%; background:transparent;"></div>
  </div>
</template>

<script>
import SongMenu from './type/SongMenu.vue'
import PlayListMenu from './type/PlayListMenu.vue'
import UserMenu from './type/UserMenu.vue'
import SingerMenu from './type/SingerMenu.vue'

export default {
  name: 'AlertMenu',

  components: {
    SongMenu, PlayListMenu, UserMenu, SingerMenu
  },

  created () {
    this.$root.eventHub.$on('closeCloverComponent', () => {
      this.$store.commit('SHOW_ALERT_MENU')
    })
  },

  mounted () {
    let elT = this.$store.state.AlertMenu.positionY
    let elL = this.$store.state.AlertMenu.positionX

    let elH = this.$refs['alertMenuContent'].$el.offsetHeight
    let elW = this.$refs['alertMenuContent'].$el.offsetWidth

    let html = document.documentElement
    let vx = html.clientWidth - 14 // 14 是右边界空隙
    let vy = html.clientHeight - 48 // 48 是底部 fixed 空隙

    if ((elT + elH) > vy) {
      this.$refs['alertMenuContent'].$el.style.top = (vy - elH) + 'px'
    }
    if ((elL + elW) > vx) {
      this.$refs['alertMenuContent'].$el.style.left = (vx - elW) + 'px'
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
  .super-btn-out >>> .super-btn-in:active {
    color: #20dbfc;
    box-shadow: 0 -0.1px 2px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3), inset 0 0 3px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6);
  }
</style>