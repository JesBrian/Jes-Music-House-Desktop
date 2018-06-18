<template>
  <div>
    <list-item class="box-shadow" />
    <list-item v-for="n in 8" :key="n + 888" class="box-shadow" />
  </div>
</template>

<script>
  import ListItem from './ListItem.vue'

  export default {
    name: 'ListGroup',

    components: {
      ListItem
    }
  }
</script>

<style scoped>

</style>