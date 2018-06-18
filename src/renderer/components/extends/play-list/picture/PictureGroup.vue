<template>
  <div style="margin-bottom:18px;">
    <picture-item />
    <picture-item v-for="n in 8" />
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