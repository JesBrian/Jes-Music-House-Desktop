<template>
  <div style="width:148px; padding:6px 5px 0;">
    <ul>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if music-albu" style="margin-right:3px;"></i>查看歌单
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if play" style="margin-right:3px;"></i>播放 [Enter]
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if double-arrow-right" style="margin-right:3px;"></i>下一首播放
      </li>

      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if non-colloection" style="margin-right:3px;"></i>收藏 [Ctrl + C]
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if share" style="margin-right:3px;"></i>分享 [Ctrl + S]
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if download" style="margin-right:3px;"></i>下载 [Ctrl + D]
      </li>
    </ul>
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
  .super-btn-in:active {
    color: #20dbfc;
    box-shadow: 0 -0.1px 2px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3), inset 0 0 3px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6);
  }
</style>