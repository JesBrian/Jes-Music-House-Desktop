<template>
  <i class="mh-if exciting" @click="sendEmoji"></i>
</template>

<script>
export default {
  name: 'Eemoji',

  methods: {
    sendEmoji () {
      this.$emit('sendEmoji')
    }
  }
}
</script>

<style scoped>
  i.exciting {
    margin-right: 38px;
  }

  i.exciting:hover {
    color: lightgreen;
  }

  i.exciting:active {
    color: lightseagreen;
  }
</style>
