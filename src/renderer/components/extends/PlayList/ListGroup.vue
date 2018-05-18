<template>
  <div>
    <div v-for="n in 8" class="box-shadow">
      <list-cell />
    </div>
  </div>
</template>

<script>
import ListCell from './ListCell.vue'

export default {
  name: 'ListGroup',

  components: {
    ListCell
  }
}
</script>

<style scoped>

</style>