<template>
  <ul>
    <li v-for="n in 18" style="width:46%; margin:25px 0 0 3%; display:inline-block;">
      <play-list-item />
    </li>
  </ul>
</template>

<script>
  import PlayListItem from './PlayListItem.vue'

  export default {
    name: 'PlayListGroup',

    components: {
      PlayListItem
    }
  }
</script>

<style scoped>

</style>