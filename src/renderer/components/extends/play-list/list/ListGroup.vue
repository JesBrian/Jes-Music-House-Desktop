<template>
  <div>
    <div v-for="n in 8" class="box-shadow">
      <list-item />
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'ListGroup',

  components: {
    ListItem
  }
}
</script>

<style scoped>

</style>