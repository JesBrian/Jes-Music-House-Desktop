<template>
  <ul>
    <li v-for="n in 18" style="width:46%; margin:25px 0 0 3%; display:inline-block;">
      <singer-cell />
    </li>
  </ul>
</template>

<script>
import SingerCell from './SingerCell.vue'

export default {
  name: 'SingerGroup',

  components: {
    SingerCell
  }
}
</script>

<style scoped>

</style>