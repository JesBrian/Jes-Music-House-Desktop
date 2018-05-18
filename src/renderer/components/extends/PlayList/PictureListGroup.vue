<template>
  <div>
    <div v-for="n in 4" class="box-shadow" style="padding:8px 0;">
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