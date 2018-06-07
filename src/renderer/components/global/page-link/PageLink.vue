<template>
  <div @click="changePage" style="margin:0; padding:0; display:inline-block; cursor:pointer;">
    <slot />
  </div>
</template>

<script>
import { changePage } from '../../../assets/js/commom.js'

export default {
  name: 'page-link',

  props: {
    url: String
  },

  methods: {
    changePage () {
      changePage(this.url, this)
    }
  }
}
</script>

<style scoped>

</style>