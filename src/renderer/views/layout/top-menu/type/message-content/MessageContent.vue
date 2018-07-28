<template>
  <div class="glass-bg box-show" style="width:368px; top:54px; right:38px; position:fixed; border-radius:0 0 0 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <div style="width:208px; height:26px; top:55%; left:50%; transform:translate(-50%,-50%); position:absolute; line-height:25px; text-align:center;">
        <div @click="changeMessageContentType('PersonalLetter')" :class="contentType === 'PersonalLetter' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:33%; height:100%; float:left; border-radius:13px 0 0 13px; cursor:pointer;">私信</div>
        <div @click="changeMessageContentType('CommentMessage')" :class="contentType === 'CommentMessage' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:34%; height:100%; float:left; border-radius:0; cursor:pointer;">评论</div>
        <div @click="changeMessageContentType('NoticeMessage')" :class="contentType === 'NoticeMessage' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:33%; height:100%; float:left; border-radius:0 13px 13px 0; cursor:pointer;">通知</div>
      </div>
    </div>

    <div style="width:100%; height:468px; padding:3px 0;">
      <component :is="contentType" />
    </div>
  </div>
</template>

<script>
  import PersonalLetter from './type/PersonalLetter.vue'
  import CommentMessage from './type/CommentMessage.vue'
  import NoticeMessage from './type/NoticeMessage.vue'

  export default {
    name: 'MessageContent',

    components: {
      PersonalLetter, CommentMessage, NoticeMessage
    },

    data () {
      return {
        contentType: 'PersonalLetter'
      }
    },

    methods: {
      changeMessageContentType (type = 'PersonalLetter') {
        this.contentType = type
      }
    }
  }
</script>

<style scoped>
  div.cube-bg {
    color:#EEE;
  }
</style>