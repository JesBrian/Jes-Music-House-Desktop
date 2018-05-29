<template>
  <component :is="showType" />
</template>

<script>
import PictureGroup from './picture/PictureGroup.vue'
import ListGroup from './list/ListGroup.vue'
import PictureListGroup from './picture-list/PictureListGroup.vue'

export default {
  name: 'ShowPlayList',

  components: {
    PictureGroup, ListGroup, PictureListGroup
  },

  props: {
    showType: String
  }
}
</script>

<style scoped>

</style>