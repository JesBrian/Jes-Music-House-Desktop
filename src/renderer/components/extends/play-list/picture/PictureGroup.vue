<template>
  <div style="margin-bottom:18px;">
    <div v-for="n in 8" style="width:20%; height:168px; margin:18px 0 8px; margin-right:-4px; display:inline-block;">
      <picture-item />
    </div>
  </div>
</template>

<script>
import PictureItem from './PictureItem.vue'

export default {
  name: 'PictureGroup',

  components: {
    PictureItem
  }
}
</script>

<style scoped>

</style>