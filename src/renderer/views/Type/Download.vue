<template>
  <div style="position:relative;">
    <div style="top:16px; right:28px; position:absolute; color:#CCC; font-size:14px;">
      储存目录：D:\CloudMusic <span style="margin-left:18px; color:#00d8ff; cursor:pointer;">打开目录</span>
    </div>
    <div style="width:100%; height:28px; margin:8px auto 0; padding:28px 0 18px; box-shadow:0 3px 8px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;">
      <div style="width:238px; height:100%; margin:0 auto; text-align:center; line-height:26px;">
        <div @click="changeType('downloaded')" :class="type === 'downloaded' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:left; border-radius:28px 0 0 28px; cursor:pointer;">
          <span> 已下载</span>
        </div>
        <div @click="changeType('nowDownload')" :class="type === 'nowDownload' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:right; border-radius:0 28px 28px 0; cursor:pointer;">
          <span> 正在下载</span>
        </div>
      </div>
    </div>

    <div style="width:100%; padding:12px 0;">
      <div class="super-btn-out">
        <span class="super-btn-in"> 全部开始</span>
      </div>
      <div class="super-btn-out">
        <span class="super-btn-in"> 全部暂停</span>
      </div>
      <div class="super-btn-out">
        <span class="super-btn-in mh-if trash"> 清空全部</span>
      </div>
    </div>

    <div style="width:100%; height:38px; box-shadow:0 -4px 8px -3px #00d8ff;"></div>


  </div>
</template>

<script>
export default {
  name: 'Download',

  data () {
    return {
      type: 'downloaded'
    }
  },

  methods: {
    changeType (type = 'downloaded') {
      this.type = type
    }
  }
}
</script>

<style scoped>
  .super-btn-out {
    width:108px; height:32px; margin:0 18px; display:inline-block;
  }
  .super-btn-out > .super-btn-in {
    width:98px; height:23px; line-height:23.8px;
  }
  .super-btn-out.active > .super-btn-in {
    line-height:23.2px;
  }
</style>