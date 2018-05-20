<template>
  <component :is="showType" />
</template>

<script>
import PictureGroup from './Picture/PictureGroup.vue'
import ListGroup from './List/ListGroup.vue'
import PictureListGroup from './PictureList/PictureListGroup.vue'

export default {
  name: 'ShowPlayList',

  components: {
    PictureGroup, ListGroup, PictureListGroup
  },

  props: ['showType']
}
</script>

<style scoped>

</style>