<template>
  <ul>
    <li v-for="n in 18" class="box-shadow" style="padding:2px 0;">
      <downloaded-cell :index="n" />
    </li>
  </ul>
</template>

<script>
import DownloadedCell from './DownloadedCell.vue'

export default {
  name: 'DownloadedGroup',

  components: {
    DownloadedCell
  }
}
</script>

<style scoped>

</style>