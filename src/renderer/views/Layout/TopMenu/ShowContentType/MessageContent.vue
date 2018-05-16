<template>
  <div class="glass-bg box-show" style="width:368px; top:54px; right:1px; position:fixed; border-radius:0 0 0 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <div style="width:208px; height:26px; top:55%; left:50%; transform:translate(-50%,-50%); position:absolute; line-height:25px; text-align:center;">
        <div @click="changeMessageContentType('message')" :class="contentType === 'message' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:33%; height:100%; float:left; border-radius:13px 0 0 13px; cursor:pointer;">私信</div>
        <div @click="changeMessageContentType('comment')" :class="contentType === 'comment' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:34%; height:100%; float:left; border-radius:0; cursor:pointer;">评论</div>
        <div @click="changeMessageContentType('notice')" :class="contentType === 'notice' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:33%; height:100%; float:left; border-radius:0 13px 13px 0; cursor:pointer;">通知</div>
      </div>
    </div>
    <div style="width:100%; height:468px; padding-bottom:6px;">
      <ul style="width:96%; height:100%; margin:0 auto; overflow:auto;">
        <li v-for="n in 18" class="box-shadow" style="width:98%;">
          <div style="height:48px;"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageContent',

  data () {
    return {
      contentType: 'message'
    }
  },

  methods: {
    changeMessageContentType (type = 'message') {
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