<template>
  <div style="width:368px; padding-bottom:13px;">
    <slot />

    <div class="glass-bg box-show" style="width:93%; height:38px; margin:12px auto; text-align:center;">
      <img v-lazy="require('../../../../../static/images/icon/cube.png')" style="width:23px; height:23px; margin-top:6px; position:absolute;"/>
      <span style="margin-left:33px; line-height:38px; font-size:22px; font-weight:700; color:#BBB;">新建歌单</span>
    </div>

    <div style="width:90%; margin:0 auto; text-align:center;">
      <p style="text-align:left; font-size:19px; color:#AAA; line-height:1.8em;">
        <i class="mh-if music-info" style="margin-right:8px; font-size:21px;"></i>新歌单标题：
      </p>
      <input type="text" class="glass-bg box-show glow-input" style="width:88%; padding:5px 8px; font-size:18px; line-height:1.2em; color:#CCC; letter-spacing:1.3px;" placeholder="请输入新歌单标题："/>
    </div>

    <div style="width:90%; margin:0 auto;">
      <div class="super-btn-out" style="width:108px; height:28px; margin-top:15px; float:left;">
        <span class="super-btn-in mh-if makesure" style="width:100px; height:20px; line-height:21px;"> 确认新建</span>
      </div>
      <div class="super-btn-out" style="width:108px; height:28px; margin-top:15px; float:right;">
        <span @click="closeModal" class="super-btn-in mh-if cancel" style="width:100px; height:20px; line-height:21px;"> 取消返回</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewAlbum',

  methods: {
    closeModal () {
      this.$parent.closeModal()
    }
  }
}
</script>

<style scoped>

</style>