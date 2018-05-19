<template>
  <ul>
    <li v-for="n in 18" class="box-shadow">
      <play-list-cell />
    </li>
  </ul>
</template>

<script>
import PlayListCell from './PlayListCell.vue'

export default {
  name: 'PlayListGroup',

  components: {
    PlayListCell
  }
}
</script>

<style scoped>

</style>