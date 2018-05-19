<template>
  <ul>
    <li v-for="n in 18" style="width:46%; margin:25px 0 0 3%; display:inline-block;">
      <user-cell />
    </li>
  </ul>
</template>

<script>
import UserCell from './UserCell.vue'

export default {
  name: 'UserGroup',

  components: {
    UserCell
  }
}
</script>

<style scoped>

</style>