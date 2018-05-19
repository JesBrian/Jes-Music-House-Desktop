<template>
  <ul>
    <li v-for="n in 18" class="box-shadow">
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