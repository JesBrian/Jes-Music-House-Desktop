<template>
  <!-- 表情选择组件 -->
  <div id="" @mouseleave="mouseLeave" class="s1c-Bg box-show" style="width:600px; height:101px; bottom:-115px; left:0; padding:9px 5px; position:absolute; background:#1F1F1F; z-index:9999;">
    <ul>
      <li style="margin:1px 0 0 3px; float:left;" v-for="(value, index) in emojiInfos" :key="index">
        <!-- 单个小表情组件 -->
        <emoji-cell :index=index+1 :emojiInfo="value"/>
      </li>
    </ul>

    <!-- 当前鼠标选中的表情展示 -->
    <div class="glass-Bg box-show" style="width:40px; height:40px; bottom:-2px; right:0; position:absolute;">
      <img id="showEmoji" src="../../../../static/img/emoji/0.jpg" style="width:82%; height:82%; top:0; left:0; bottom:0; right:0; margin:auto; position:absolute;"/>
    </div>
  </div>
</template>

<script>
import emojiCell from './EmojiCell.vue'

export default {
  name: 'EmojiContent',
  components: {
    emojiCell
  },
  data () {
    return {
      emojiInfos: ['呵呵', '哈哈', '吐舌', '啊', '酷', '怒', '开心', '汗', '泪', '黑线', '鄙视', '不高兴', '真棒', '钱', '疑问', '阴脸', '吐', '咦', '委屈', '花心', '呼~', '笑脸', '冷', '太开心', '滑稽', '勉强', '狂汗', '乖', '睡觉', '惊哭', '生气', '惊讶', '喷', '爱心', '心碎', '玫瑰', '礼物', '彩虹', '星星月亮', '太阳', '钱币', '灯泡', '茶杯', '蛋糕', '音乐', 'haha', '胜利', '大拇指', '弱', 'OK']
    }
  },
  methods: {
    mouseLeave () {
      this.$parent.hiddenEmojiContent()
    },
    getEmoji (info) {
      this.$parent.writeEmoji(info)
    },
    showEmoji (index) {
      document.getElementById('showEmoji').src = this.$store.state.baseHost + 'img/emoji/' + index + '.png'
    },
    hiddenEmoji () {
      document.getElementById('showEmoji').src = this.$store.state.baseHost + 'img/emoji/0.jpg'
    }
  }
}
</script>

<style scoped>

</style>
