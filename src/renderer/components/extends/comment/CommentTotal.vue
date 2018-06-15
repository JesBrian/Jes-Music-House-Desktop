<template>
  <div style="padding:0 3%; box-sizing:border-box;">
    <new-comment />

    <div style="width:100%; margin-top:18px;">
      <div style="height:53px; margin:0 auto; padding:0 23px; box-sizing:border-box; box-shadow:0 3px 3px -3px #999; line-height:68px; text-shadow:1px 1px 0.5px #000;">
        <span style="font-size:16px; color:#CCC;">精彩评论</span>
      </div>
      <comment-group />

      <div style="height:53px; margin:0 auto; padding:0 23px; box-sizing:border-box; box-shadow:0 3px 3px -3px #999; line-height:68px; text-shadow:1px 1px 0.5px #000;">
        <span style="font-size:16px; color:#CCC;">最新评论</span>
      </div>
      <comment-group />

      <pagination />
    </div>
  </div>
</template>

<script>
  import NewComment from './NewComment.vue'
  import CommentGroup from './CommentGroup.vue'
  import Pagination from '../../base/pagination/Pagination.vue'

  export default {
    name: 'CommentTotal',

    components: {
      Pagination, NewComment, CommentGroup
    }
  }
</script>

<style scoped>

</style>