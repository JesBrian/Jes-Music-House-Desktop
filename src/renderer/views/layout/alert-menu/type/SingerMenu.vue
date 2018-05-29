<template>
  <div style="width:170px; padding:6px 5px 0;">
    <ul>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if singer" style="margin-right:3px;"></i> 查看歌手
      </li>
      <li @click="closeAlertMenu" class="super-btn-in" style="margin-bottom:5px; top:12px; display:block; padding:5px 13px 5px 8px; position:relative; text-align:left;">
        <i class="mh-if non-colloection" style="margin-right:3px;"></i> 关注 [Ctrl + C]
      </li>
    </ul>
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