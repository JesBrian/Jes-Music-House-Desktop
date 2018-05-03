<template>
  <ul>
    <li v-for="n in 8" class="box-shadow">
      <comment-cell />
    </li>
  </ul>
</template>

<script>
import CommentCell from './CommentCell.vue'

export default {
  name: 'CommentGroup',
  components: {CommentCell}
}
</script>

<style scoped>

</style>