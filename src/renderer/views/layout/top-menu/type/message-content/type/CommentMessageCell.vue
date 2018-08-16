<template>
  <div class="box-shadow" style="width:98%; padding:0 8px 12px 0; box-sizing:border-box;">
    <div style="width:100%; height:100%; padding-left:50px; position:relative; box-sizing:border-box;">
      <div style="width:48px; height:100%; top:0; left:0; position:absolute;">
        <page-link url="/user" style="width:33px; height:33px; margin:7px; float:left; border-radius:50%;">
          <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:100%; height:100%; padding:2px; box-sizing:border-box; border-radius:50%;" />
        </page-link>
      </div>
      <div style="padding:8px 0 6px;">
        <p style="line-height:1.9em;">
          <page-link url="/user">Music House</page-link>
          <span style="margin-top:8px; float:right; font-size:13px; color:#999; line-height:1em;">2018-09-12</span>
        </p>
        <p style="margin-top:-3px; word-break:break-word; line-height:1.2em; font-size:13px;">
          回复我：cbshbn ckcbs hb测试nc kasnk nk和cb春水浮回复插入sh15bn cka工程vsnknc 测试 2632 vkcbs hbn ck12asn 陈汕大vncv kcbsh 函数 b ncvk
        </p>
        <page-link url="/comment" class="cube-bg box-show" style="width:100%; margin:2px 0 0; padding:5px; line-height:1.2em; font-size:13px; cursor:pointer;">
          我的评论：大学吗？大学的确学习成绩外的加分项不少，不过奖学金这种东西不求永远只求曾今拥有就好啦。
        </page-link>
      </div>

      <p style="text-align:right">
          <span @click="replyComment" style="cursor:pointer;">
            <i class="mh-if feedback"></i> 回复
          </span>
      </p>
    </div>

    <div v-if="isShowReplyContent" style="margin:-10px 0 -12px; padding:0 0 0 8px; box-sizing:border-box;">
      <new-comment />
    </div>
  </div>
</template>

<script>
  import NewComment from '../../../../../../components/extends/comment/NewComment.vue'

  export default {
    name: 'CommentMessageCell',

    components: {
      NewComment
    },

    data () {
      return {
        isShowReplyContent: false
      }
    },

    methods: {
      replyComment () {
        this.isShowReplyContent = !this.isShowReplyContent
      }
    }
  }
</script>

<style scoped>

</style>