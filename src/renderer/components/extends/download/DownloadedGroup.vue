<template>
  <ul>
    <li style="margin:0 0 2px; padding:2px 0 0; box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727; line-height:32px;">
      <div style="height:30px;">
        <div style="width:5.5%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828;"></div>
        <div style="width:9%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">操作</div>
        <div style="width:47.5%; height:100%; padding-left:14px; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">音乐标题</div>
        <div style="width:30%; height:100%; padding-left:16px; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">歌手</div>
        <div style="width:8%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center; cursor:pointer;">时长</div>
      </div>
    </li>
    <li v-for="n in 18" class="box-shadow" style="padding:2px 0;">
      <downloaded-item :index="n" />
    </li>
  </ul>
</template>

<script>
import DownloadedItem from './DownloadedItem.vue'

export default {
  name: 'DownloadedGroup',

  components: {
    DownloadedItem
  }
}
</script>

<style scoped>

</style>