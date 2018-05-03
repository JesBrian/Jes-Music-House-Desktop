<template>
  <!-- 单个小表情组件 -->
  <a class="emoji-cell" :title="emojiInfo" @click="getEmoji" @mouseenter="showEmoji" @mouseleave="hiddenEmoji">
    <img :src="$store.state.baseHost + 'img/emoji/' + this.index + '.png'"/>
  </a>
</template>

<script>
export default {
  name: 'EmojiCell',

  props: {
    index: {},
    emojiInfo: {}
  },

  methods: {
    getEmoji () {
      this.$parent.getEmoji(this.emojiInfo)
    },
    showEmoji () {
      this.$parent.showEmoji(this.index)
    },
    hiddenEmoji () {
      this.$parent.hiddenEmoji()
    }
  }
}
</script>

<style scoped>
  .emoji-cell {
    width: 32px;
    height: 32px;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    border: 0.5px solid #444;
    opacity: 0.68;
  }

  .emoji-cell:hover {
    background: #050505;
    border: 1px solid #000;
    border-radius: 3px;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
    opacity: 1;
  }

  .emoji-cell > img {
    width: 76%;
    height: 76%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    position: absolute;
  }
</style>
