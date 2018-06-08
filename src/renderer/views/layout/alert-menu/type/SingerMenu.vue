<template>
  <div style="width:170px; padding:6px 5px 0;">
    <page-link url="/singer" style="width:100%; height:100%;">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if singer" style="margin-right:3px;"></i> 查看歌手
      </div>
    </page-link>
    <div @click="closeAlertMenu">
      <div class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if non-colloection" style="margin-right:3px;"></i> 关注 [Ctrl + C]
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingerMenu',

    methods: {
      closeAlertMenu () {
        this.$parent.closeAlertMenu()
      }
    }
  }
</script>

<style scoped>

</style>