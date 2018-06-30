<template>
  <ul>
    <li v-for="n in 18" :key="n + 99" style="width:46%; margin:25px 0 0 3%; display:inline-block;">
      <singer-item />
    </li>
  </ul>
</template>

<script>
  import SingerItem from './SingerItem.vue'

  export default {
    name: 'SingerGroup',

    components: {
      SingerItem
    }
  }
</script>

<style scoped>

</style>