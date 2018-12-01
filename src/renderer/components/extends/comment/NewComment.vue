<template>
  <div style="margin:18px 0 0; position:relative;">
    <div class="glass-bg box-show" style="width:100%; height:108px; padding:10px; position:relative; box-sizing:border-box;">
      <label>
        <textarea v-model.trim="newComment" class="cube-bg box-show glow-input" style="width:100%; height:100%; padding:8px 12px; color:#DDD; font-size:15px; text-indent:2em; resize:none;"></textarea>
      </label>
    </div>
    <div style="height:50px; margin-left:18px; line-height:50px;">

      <emoji-button @sendEmoji="changeShowEmojiContent" />

      <div @click="createComment" class="super-btn-out" style="width:108px; height:30px; margin:8px 18px; float:right;">
        <span class="super-btn-in mh-if comment" style="width:100px; height:22px; line-height:24px;"> 发表评论</span>
      </div>
      <span style="float:right; color:#AAA;">{{ wordNum }}</span>

      <emoji-content v-if="isShowEmojiContent" />
    </div>
  </div>
</template>

<script>
  import EmojiButton from '../emoji/EmojiButton.vue'
  import EmojiContent from '../emoji/EmojiContent.vue'

  export default {
    name: 'NewComment',

    components: {
      EmojiContent, EmojiButton
    },

    data () {
      return {
        isShowEmojiContent: false,
        newComment: ''
      }
    },

    computed: {
      wordNum () {
        return 200 - this.newComment.length
      }
    },

    watch: {
      wordNum (nVal) {
        if (nVal <= 0) {
          this.newComment = this.newComment.substr(0, 200)
        }
      }
    },

    methods: {
      changeShowEmojiContent () {
        this.isShowEmojiContent = !this.isShowEmojiContent
      },

      writeEmoji (emoji) {
        // console.log(emoji)
        this.newComment += `[-${emoji}-]`
      },

      createComment () {
        alert(this.newComment)
      }
    }
  }
</script>

<style scoped>

</style>