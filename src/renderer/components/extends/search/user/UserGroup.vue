<template>
  <ul>
    <li v-for="n in 18" style="width:46%; margin:25px 0 0 3%; display:inline-block;">
      <user-item />
    </li>
  </ul>
</template>

<script>
  import UserItem from './UserItem.vue'

  export default {
    name: 'UserGroup',

    components: {
      UserItem
    }
  }
</script>

<style scoped>

</style>