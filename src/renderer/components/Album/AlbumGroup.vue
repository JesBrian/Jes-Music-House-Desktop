<template>
  <ul style="width:93%; margin:0 auto;">
    <li v-for="n in 8" style="width:25%; height:208px; margin:0; padding:0; position:relative; display:inline-block;">
      <album-cell />
    </li>
  </ul>
</template>

<script>
import AlbumCell from './AlbumCell.vue'

export default {
  name: 'AlbumGroup',
  components: {
    AlbumCell
  }
}
</script>

<style scoped>

</style>