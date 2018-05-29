<template>
  <div style="width:184px; padding:6px 5px 0;">
    <ul>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if feedback" style="margin-right:3px;"></i> 查看评论
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if play" style="margin-right:3px;"></i> 播放 [Enter]
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if double-arrow-right" style="margin-right:3px;"></i> 下一首播放
      </li>

      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if non-colloection" style="margin-right:3px;"></i> 收藏 [Ctrl + C]
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if share" style="margin-right:3px;"></i> 分享 [Ctrl + S]
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if download" style="margin-right:3px;"></i> 下载 [Ctrl + D]
      </li>

      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if trash" style="margin-right:3px;"></i> 从歌单删除 [Delete]
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SongMenu',

  methods: {
    closeAlertMenu () {
      this.$parent.closeAlertMenu()
    }
  }
}
</script>

<style scoped>

</style>