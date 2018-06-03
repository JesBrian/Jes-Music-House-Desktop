<template>
  <ul style="width:93%; margin:0 auto;">
    <li v-for="n in 8" style="width:25%; height:208px; margin:0; padding:0; position:relative; display:inline-block;">
      <album-cell />
    </li>
    <li>
      <pagination />
    </li>
  </ul>
</template>

<script>
import AlbumCell from './AlbumCell.vue'
import Pagination from '../../base/pagination/Pagination.vue'

export default {
  name: 'AlbumGroup',

  components: {
    Pagination, AlbumCell
  }
}
</script>

<style scoped>

</style>