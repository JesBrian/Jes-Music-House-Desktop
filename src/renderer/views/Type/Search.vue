<template>
	<div>
    <div style="width:100%; height:38px; margin:28px auto 10px; box-shadow:0 3px 8px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;">
      <div class="super-btn-out active" style="width:88px; height:32px; margin:0 18px; display:inline-block;">
        <span class="super-btn-in mh-if music-list" style="width:79px; height:24px; line-height:25px;"> 单曲</span>
      </div>
      <div class="super-btn-out" style="width:88px; height:32px; margin:0 18px; display:inline-block;">
        <span class="super-btn-in mh-if music-albu" style="width:79px; height:24px;"> 歌单</span>
      </div>
      <div class="super-btn-out" style="width:88px; height:32px; margin:0 18px; display:inline-block;">
        <span class="super-btn-in mh-if singer" style="width:79px; height:24px;"> 歌手</span>
      </div>
      <div class="super-btn-out" style="width:88px; height:32px; margin:0 18px; display:inline-block;">
        <span class="super-btn-in mh-if datum" style="width:79px; height:24px;"> 用户</span>
      </div>
    </div>
    <div style="width:95%; margin:0 auto 18px; text-align:right;">
      <span style="margin-right:38px; color:#CCC; font-size:14px;">
        搜索 " <span style="color:#00d8ff;">心碎</span> "，共找到 <span style="color:#00d8ff;">2222</span> 首单曲
      </span>
      <div style="width:100%; height:688px; margin-top:6px; background:lightgreen;"></div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Search',

  components: {},

  mounted () {
    console.log(this.$route.params.key)
  }
}
</script>

<style scoped>

</style>