<template>
  <ul>
    <li v-for="n in 18" class="box-shadow">
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