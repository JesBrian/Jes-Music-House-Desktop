<template>
  <div style="width:368px; padding-bottom:13px;">
    <slot />

    <div class="glass-bg box-show" style="width:93%; height:38px; margin:12px auto; text-align:center;">
      <img v-lazy="require('../../../../../../static/images/icon/cube.png')" style="width:23px; height:23px; margin-top:6px; position:absolute;"/>
      <span style="margin-left:33px; line-height:38px; font-size:22px; font-weight:700; color:#BBB;">新建歌单</span>
    </div>

    <div style="width:90%; margin:0 auto; text-align:center;">
      <p style="text-align:left; font-size:19px; color:#AAA; line-height:1.8em;">
        <i class="mh-if music-info" style="margin-right:8px; color:#00d8ff; font-size:21px;"></i>新歌单标题：
      </p>
      <input v-model="albumName" class="glass-bg box-show glow-input" style="width:88%; padding:6px 8px 4px; font-size:20px; line-height:1em; color:#CCC; letter-spacing:1.3px;" placeholder="请输入新歌单标题："/>
    </div>

    <div style="width:90%; margin:0 auto;">
      <div @click="newAlbum" class="super-btn-out" style="width:108px; height:33px; margin-top:15px; float:left;">
        <span class="super-btn-in mh-if makesure" style="width:100px; height:24px; top:51%; line-height:25px;"> 确认新建</span>
      </div>
      <div @click="closeModal" class="super-btn-out" style="width:108px; height:33px; margin-top:15px; float:right;">
        <span class="super-btn-in mh-if cancel" style="width:100px; height:24px; top:51%; line-height:25px;"> 取消返回</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewAlbum',

  data () {
    return {
      albumName: ''
    }
  },

  methods: {
    newAlbum () {
      if (this.albumName === '') {
        this.$store.commit('SHOW_TIPS', {
          msg: '请输入歌单名',
          type: 'warning'
        })
        return false
      }

      this.closeModal()
      this.$store.commit('SHOW_TIPS', {
        msg: '已创建新歌单',
        type: 'info'
      })
    },

    closeModal () {
      this.$parent.closeModal()
    }
  }
}
</script>

<style scoped>

</style>