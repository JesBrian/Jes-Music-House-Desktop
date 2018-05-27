<template>
  <div style="width:888px;">
    <slot />

    <div class="glass-bg box-show" style="width:93%; height:38px; margin:12px auto; text-align:center;">
      <img v-lazy="require('../../../../../../static/images/icon/cube.png')" style="width:23px; height:23px; margin-top:6px; position:absolute;"/>
      <span style="margin-left:33px; line-height:38px; font-size:22px; font-weight:700; color:#BBB;">新建歌单</span>
    </div>


    <webview id="foo" src="http://www.baidu.com" allowpopups style="width:100%; height:408px;"></webview>

  </div>
</template>

<script>
export default {
  name: 'OauthLogin'
}
</script>

<style scoped>

</style>