<template>
  <div>
    <picture-list-item class="box-shadow" />
    <picture-list-item v-for="n in 4" :key="n + 888" class="box-shadow" />
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