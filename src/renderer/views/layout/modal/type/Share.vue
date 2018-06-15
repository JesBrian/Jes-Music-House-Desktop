<template>
  <div style="width:368px; height:168px;">
    <slot />

    <div class="glass-bg box-show" style="width:93%; height:38px; margin:12px auto; text-align:center;">
      <img v-lazy="require('../../../../../../static/images/icon/cube.png')" style="width:23px; height:23px; margin-top:6px; position:absolute;"/>
      <span style="margin-left:33px; line-height:38px; font-size:22px; font-weight:700; color:#BBB;">新建歌单</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Share'
  }
</script>

<style scoped>

</style>