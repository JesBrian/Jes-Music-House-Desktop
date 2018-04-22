<template>
  <div class="glass-bg box-show" style="width:368px; height:468px; top:54px; right:1px; position:fixed; border-radius:0 0 0 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <div style="width:208px; height:26px; top:55%; left:50%; transform:translate(-50%,-50%); position:absolute; line-height:25px; text-align:center;">
        <div class="cube-bg box-show" style="width:33%; height:100%; float:left; border-radius:13px 0 0 13px; cursor:pointer;">私信</div>
        <div class="glass-bg box-show" style="width:34%; height:100%; float:left; border-radius:0; cursor:pointer;">评论</div>
        <div class="glass-bg box-show" style="width:33%; height:100%; float:left; border-radius:0 13px 13px 0; cursor:pointer;">通知</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageContent',

  methods: {
    closeShowContent () {
      this.$parent.changeShowContentType('MessageContent')
    }
  }
}
</script>

<style scoped>

</style>