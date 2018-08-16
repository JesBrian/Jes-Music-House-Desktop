<template>
  <div style="width:98%; height:100%; margin:0 auto; overflow:auto;">
    <comment-message-cell v-for="n in 18" />
  </div>
</template>

<script>
  import CommentMessageCell from './CommentMessageCell.vue'

  export default {
    name: 'CommentMessage',

    components: {
      CommentMessageCell
    }
  }
</script>

<style scoped>

</style>