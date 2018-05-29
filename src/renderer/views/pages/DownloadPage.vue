<template>
  <div style="position:relative;">

    <div style="top:16px; right:28px; position:absolute; color:#CCC; font-size:14px;">
      储存目录：D:\CloudMusic <span style="margin-left:18px; color:#00d8ff; cursor:pointer;">打开目录</span>
    </div>

    <div style="width:100%; height:28px; margin:8px auto 0; padding:28px 0 18px; box-shadow:0 3px 8px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:28px; font-weight:700;">
      <div style="width:238px; height:100%; margin:0 auto; text-align:center; line-height:26.5px;">
        <div @click="changeType('downloaded')" :class="type === 'downloaded' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; padding-top:0.6px; float:left; border-radius:28px 0 0 28px; cursor:pointer;">
          <span style="color:#999;">已下载</span>
        </div>
        <div @click="changeType('now-download')" :class="type === 'now-download' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; padding-top:0.6px; float:right; border-radius:0 28px 28px 0; cursor:pointer;">
          <span style="color:#999;">正在下载</span>
        </div>
      </div>
    </div>

    <div v-if="type === 'downloaded'" style="width:100%; padding:12px 0;">
      <div class="super-btn-out">
        <span class="super-btn-in mh-if play"> 播放全部</span>
      </div>
      <div class="super-btn-out">
        <span class="super-btn-in mh-if menu"> 添加列表</span>
      </div>
      <label class="super-btn-out active" style="width:268px; height:32px; margin:-2px 8px 0 0; float:right; position:relative; border:none; border-radius:16px;">
        <input type="text" class="super-btn-in" placeholder="搜索本歌单音乐" style="width:258px; height:76%; top:50%; padding:0 12px; box-sizing:border-box; border-radius:12px; text-align:left; font-size:17px;"/>
        <i class="mh-if search" style="top:7px; right:14px; position:absolute;"></i>
      </label>
    </div>
    <div v-if="type === 'now-download'" style="width:100%; padding:12px 0;">
      <div class="super-btn-out">
        <span class="super-btn-in mh-if download"> 全部开始</span>
      </div>
      <div class="super-btn-out">
        <span class="super-btn-in mh-if stop"> 全部暂停</span>
      </div>
      <div class="super-btn-out">
        <span class="super-btn-in mh-if trash"> 清空全部</span>
      </div>
    </div>

    <div style="width:100%; box-shadow:0 -4px 8px -3px #00d8ff;">
      <component :is="type + '-group'" />
    </div>


  </div>
</template>

<script>
import NowDownloadGroup from '../../components/extends/download/NowDownloadGroup.vue'
import DownloadedGroup from '../../components/extends/download/DownloadedGroup.vue'

export default {
  name: 'DownloadPage',

  components: {
    DownloadedGroup, NowDownloadGroup
  },

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

  .cube-bg span {
    color:#DDD!important;
  }
</style>