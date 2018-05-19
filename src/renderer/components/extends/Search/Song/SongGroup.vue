<template>
  <ul>
    <li v-for="n in 18" class="box-shadow">
      <song-cell />
    </li>
  </ul>
</template>

<script>
import SongCell from './SongCell.vue'

export default {
  name: 'SongGroup',

  components: {
    SongCell
  }
}
</script>

<style scoped>

</style>