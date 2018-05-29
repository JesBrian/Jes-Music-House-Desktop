<template>
  <ul>
    <li v-for="n in 8" class="box-shadow">
      <comment-cell @hiddenOtherReplyContent="hiddenOtherReplyContent" />
    </li>
  </ul>
</template>

<script>
import CommentCell from './CommentCell.vue'

export default {
  name: 'CommentGroup',

  components: {
    CommentCell
  },

  data () {
    return {
      newNewCommentObj: null
    }
  },

  methods: {
    hiddenOtherReplyContent (obj) {
      if ((this.newNewCommentObj !== null) && (this.newNewCommentObj._uid !== obj._uid)) {
        this.newNewCommentObj.isShowReplyContent = false
      }
      this.newNewCommentObj = obj
    }
  }
}
</script>

<style scoped>

</style>