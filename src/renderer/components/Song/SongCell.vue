<template>
  <div @click.right="mouseClickRight" style="width:100%; height:38px;"></div>
</template>

<script>
export default {
  name: 'SongCell',

  methods: {
    mouseClickRight () {
      this.$store.commit('SHOW_ALERT_MENU', 'SongMenu')
    }
  }
}
</script>

<style scoped>

</style>