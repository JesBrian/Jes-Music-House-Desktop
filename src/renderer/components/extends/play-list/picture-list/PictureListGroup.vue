<template>
  <div>
    <div v-for="n in 4" class="box-shadow" style="padding:8px 0;">
      <picture-list-item />
    </div>
  </div>
</template>

<script>
import PictureListItem from './PictureListItem.vue'

export default {
  name: 'PictureListGroup',

  components: {
    PictureListItem
  }
}
</script>

<style scoped>

</style>