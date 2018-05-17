<template>
  <div>
    <div v-for="n in 6" class="box-shadow">
      <picture-list-cell />
    </div>
  </div>
</template>

<script>
import PictureListCell from './PictureListCell.vue'

export default {
  name: 'PictureListGroup',

  components: {
    PictureListCell
  }
}
</script>

<style scoped>

</style>