<template>
  <div @click.right="mouseClickRight" style="width:100%; height:38px;"></div>
</template>

<script>
export default {
  name: 'SongCell',

  methods: {
    mouseClickRight () {
      console.log(888)
    }
  }
}
</script>

<style scoped>

</style>