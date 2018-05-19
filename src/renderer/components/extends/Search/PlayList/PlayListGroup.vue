<template>
  <ul>
    <li v-for="n in 18" style="width:46%; margin:25px 0 0 3%; display:inline-block;">
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