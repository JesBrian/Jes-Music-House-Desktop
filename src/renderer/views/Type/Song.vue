<template>
	<div>
		<div style="width:92%; height:328px; margin:0 auto 28px;">
      <div style="width:36%; height:100%; float:left;">
        <div style="width:100%; height:280px; background:gold"></div>
        <div style="width:100%; text-align:center;">
          <div class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if non-colloection" style="width:60px; height:20px; line-height:21px;"> 喜欢</span>
          </div>
          <div @click="showModal('AddAlbum')" class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if collection-music" style="width:60px; height:20px; line-height:21px;"> 收藏</span>
          </div>
          <div class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if download" style="width:60px; height:20px; line-height:21px;"> 下载</span>
          </div>
          <div @click="showModal('Share')" class="super-btn-out" style="width:68px; height:29px; margin:10px 1px 0;">
            <span class="super-btn-in mh-if share" style="width:60px; height:20px; line-height:21px;"> 分享</span>
          </div>
        </div>
      </div>
      <div style="width:64%; height:100%; float:left; background:lightseagreen;"></div>
    </div>
    <div style="width:92%; height:388px; background:lightgreen; margin:0 auto 28px;"></div>
	</div>
</template>

<script>
export default {
  name: 'Song',

  components: {},

  methods: {
    showModal (type = '') {
      this.$store.commit('CHANGE_MODAL_TYPE', type)
    }
  }
}
</script>

<style scoped>

</style>