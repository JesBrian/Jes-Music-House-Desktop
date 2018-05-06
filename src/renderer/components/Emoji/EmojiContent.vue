<template>
  <!-- 表情选择组件 -->
  <div @mouseleave="mouseLeave" class="emoji-content glass-bg box-show">
    <ul>
      <li style="margin:1px 0 -18px 3px; float:left;" v-for="(value, index) in emojiInfos" :key="index">
        <!-- 单个小表情组件 -->
        <emoji-cell :index=index+1 :emojiInfo="value"/>
      </li>
    </ul>

    <!-- 当前鼠标选中的表情展示 -->
    <div class="glass-bg box-show" style="width:40px; height:40px; bottom:0; right:0; position:absolute;">
      <img id="showEmoji" src="../../../../static/images/emoji/0.jpg" style="width:82%; height:82%; top:0; left:0; bottom:0; right:0; margin:auto; position:absolute;"/>
    </div>
  </div>
</template>

<script>
import EmojiCell from './EmojiCell.vue'

export default {
  name: 'EmojiContent',

  components: {
    EmojiCell
  },

  data () {
    return {
      emojiInfos: ['呵呵', '哈哈', '吐舌', '啊', '酷', '怒', '开心', '汗', '泪', '黑线', '鄙视', '不高兴', '真棒', '钱', '疑问', '阴脸', '吐', '咦', '委屈', '花心', '呼~', '笑脸', '冷', '太开心', '滑稽', '勉强', '狂汗', '乖', '睡觉', '惊哭', '生气', '惊讶', '喷', '爱心', '心碎', '玫瑰', '礼物', '彩虹', '星星月亮', '太阳', '钱币', '灯泡', '茶杯', '蛋糕', '音乐', 'haha', '胜利', '大拇指', '弱', 'OK']
    }
  },
  methods: {
    mouseLeave () {
      this.$parent.changeShowEmojiContent()
    },
    getEmoji (info) {
      this.$parent.writeEmoji(info)
    },
    showEmoji (index) {
      document.getElementById('showEmoji').src = '../../../../static/images/emoji/' + index + '.png'
    },
    hiddenEmoji () {
      document.getElementById('showEmoji').src = '../../../../static/images/emoji/0.jpg'
    }
  }
}
</script>

<style scoped>
  .emoji-content {
    width:540px; height:157px; top:78%; left:0; padding:8px 5px; position:absolute; z-index:9999;
  }
</style>
