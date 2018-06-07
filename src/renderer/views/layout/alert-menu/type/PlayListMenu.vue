<template>
  <div style="width:150px; padding:6px 5px 0;">
    <div @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
      <i class="mh-if music-albu" style="margin-right:3px;"></i> 查看歌单
    </div>
    <div @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
      <i class="mh-if play" style="margin-right:3px;"></i> 播放 [Enter]
    </div>
    <div @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
      <i class="mh-if double-arrow-right" style="margin-right:3px;"></i> 下一首播放
    </div>

    <div @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
      <i class="mh-if non-colloection" style="margin-right:3px;"></i> 收藏 [Ctrl + C]
    </div>
    <div @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
      <i class="mh-if share" style="margin-right:3px;"></i> 分享 [Ctrl + S]
    </div>
    <div @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
      <i class="mh-if download" style="margin-right:3px;"></i> 下载 [Ctrl + D]
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayListMenu',

    methods: {
      closeAlertMenu () {
        this.$parent.closeAlertMenu()
      }
    }
  }
</script>

<style scoped>

</style>