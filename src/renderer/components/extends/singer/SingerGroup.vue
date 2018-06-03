<template>
  <ul>
    <li v-for="n in 18" style="width:20%; float:left;">
      <singer-item />
    </li>
    <li>
      <pagination />
    </li>
  </ul>
</template>

<script>
import SingerItem from './SingerItem.vue'
import Pagination from '../../base/pagination/Pagination.vue'

export default {
  name: 'SingerGroup',

  components: {
    Pagination, SingerItem
  }
}
</script>

<style scoped>

</style>