<template>
  <div style="width:150px; padding:6px 5px 0;">
    <page-link url="/play-list" style="width:100%; height:100%;">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if music-albu" style="margin-right:3px;"></i> 查看歌单
      </div>
    </page-link>
    <div @click="closeAlertMenu">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if play" style="margin-right:3px;"></i> 播放 [Enter]
      </div>
    </div>
    <div @click="closeAlertMenu">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if double-arrow-right" style="margin-right:3px;"></i> 下一首播放
      </div>
    </div>
    <div @click="closeAlertMenu">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if non-colloection" style="margin-right:3px;"></i> 收藏 [Ctrl + C]
      </div>
    </div>
    <div @click="closeAlertMenu">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if share" style="margin-right:3px;"></i> 分享 [Ctrl + S]
      </div>
    </div>
    <div @click="closeAlertMenu">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if download" style="margin-right:3px;"></i> 下载 [Ctrl + D]
      </div>
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