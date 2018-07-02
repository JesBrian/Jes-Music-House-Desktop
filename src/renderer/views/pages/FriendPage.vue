<template>
  <div style="position:relative; overflow:hidden;">

    <div style="width:676px; height:53px; top:50px; padding:0 43px; position:fixed; box-sizing:border-box; background:#111; box-shadow:0 3px 3px -3px #20dbfc; text-shadow:1px 1px 0.5px #000; z-index:5;">
      <span style="font-size:23px; font-weight:700; color:#CCC; line-height:63px;">动态</span>
      <div class="super-btn-out" style="width:84px; height:30px; margin-top:13px; float:right;">
        <span class="super-btn-in mh-if feedback" style="width:76px; height:22px; line-height:23px;"> 写动态</span>
      </div>
    </div>

    <div style="width:68%; min-height:688px; margin-left:1.8%; padding-top:48px; display:inline-block;">
      <ul>
        <li v-for="n in 18" class="box-shadow">
          <div style="height:88px;"></div>
        </li>
      </ul>
    </div>

    <div class="glass-bg box-show" style="width:28%; height:108%; top:-2px; right:0; float:right; position:absolute; z-index:10;">
      <div class="box-shadow" style="width:96.8%; margin:auto;">
        <div style="width:86%; height:43px; margin:18px auto 0;">
          <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="cube-bg box-show" style="width:43px; height:43px; margin-right:13px; padding:3px; float:left; border-radius:0;"/>
          <p style="padding-top:1px; font-size:18px;">JesBrian</p>
          <p class="text-hidden" style="width:68%; font-size:14px; line-height:2em; ">JesBrianJesBrianJesBrianJesBrian</p>
        </div>
        <div style="width:99%; height:43px; margin:16px auto 0; padding-bottom:12px; text-align:center; font-weight:700;">
          <page-link url="/user" style="width:33%; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">动态</p>
          </page-link>
          <page-link url="/user" style="width:34%; height:100%; float:left; box-sizing:border-box; border-left:1px solid #282828; border-right:1px solid #282828;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">关注</p>
          </page-link>
          <page-link url="/user" style="width:33%; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">粉丝</p>
          </page-link>
        </div>
      </div>
      <div></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'FriendPage'
  }
</script>

<style scoped>

</style>