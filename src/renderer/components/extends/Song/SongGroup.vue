<template>
  <ul>
    <li v-for="n in 108" class="box-shadow" style="padding:2px 0;">
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