<template>
  <ul>
    <li v-for="n in 18" class="box-shadow" style="padding:2px 0;">
      <now-download-cell />
    </li>
  </ul>
</template>

<script>
import NowDownloadCell from './NowDownloadCell.vue'

export default {
  name: 'NowDownloadGroup',

  components: {
    NowDownloadCell
  }
}
</script>

<style scoped>

</style>