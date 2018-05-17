<template>
  <i class="mh-if exciting" @click="sendEmoji"></i>
</template>

<script>
export default {
  name: 'EmojiButton',

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
    color:#AAA;
  }
  i.exciting:hover {
    color: #00d8ff;
  }
</style>
