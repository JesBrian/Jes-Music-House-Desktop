<template>
  <div style="margin:18px 0 0; position:relative;">
    <div class="glass-bg box-show" style="width:100%; height:108px; position:relative;">
      <label><textarea class="cube-bg box-show glow-input" style="width:97%; height:82%; top:50%; left:50%; position:absolute; transform:translate(-50%, -50%); resize:none;"></textarea></label>
    </div>
    <div style="height:50px; margin-left:18px; line-height:50px;">

      <emoji-button @sendEmoji="changeShowEmojiContent" />

      <div class="super-btn-out" style="width:108px; height:30px; margin:8px 18px; float:right;">
        <span class="super-btn-in mh-if comment" style="width:100px; height:22px; line-height:24px;"> 发表评论</span>
      </div>
      <span style="float:right; color:#AAA;">138</span>

      <emoji-content v-if="isShowEmojiContent" />
    </div>
  </div>
</template>

<script>
import EmojiButton from '../Emoji/EmojiButton.vue'
import EmojiContent from '../Emoji/EmojiContent.vue'

export default {
  name: 'NewComment',

  components: {EmojiContent, EmojiButton},

  data () {
    return {
      isShowEmojiContent: false
    }
  },

  methods: {
    changeShowEmojiContent () {
      this.isShowEmojiContent = !this.isShowEmojiContent
    }
  }
}
</script>

<style scoped>

</style>