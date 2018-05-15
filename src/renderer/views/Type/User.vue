<template>
	<div>
		<!-- 个人信息 -->
    <div style="width:100%; height:268px;">
      <div style="width:22%; padding:28px; display:inline-block; box-sizing:border-box;">
        <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:138px; height:138px; float:left;"/>
      </div>

      <div style="width:75%; min-height:188px; display:inline-block;">

        <div style="width:100%; height:48px; padding-top:8px; box-shadow:0 3px 2px -2px #666;">
          <p style="float:left; text-indent:0.9em; font-size:26px; line-height:2em;">JesBrian</p>
          <div class="super-btn-out" style="width:50px; height:26px; margin:11px 0 0 28px; float:left;">
            <span class="super-btn-in" style="width:44px; height:20px; line-height:20px;">Lv 9</span>
          </div>
          <div class="super-btn-out" style="width:108px; height:26px; right:18px; margin-top:11px; float:right;">
            <span class="super-btn-in" style="width:100px; height:20px; line-height:20px;"> 编辑个人信息</span>
          </div>
        </div>

        <div style="width:100%; height:38px; padding:8px 0; box-shadow:0 3px 2px -2px #666; clear:both; text-align:center;">
          <router-link to="/user" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">动态</p>
          </router-link>
          <router-link to="/user" style="width:88px; height:100%; float:left; border-left:1px solid #333; border-right:1px solid #333;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">关注</p>
          </router-link>
          <router-link to="/user" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">粉丝</p>
          </router-link>
        </div>

        <p style="float:left; margin-top:13px; word-break:break-all; line-height:1.2em;">
          个人简介：<span style="letter-spacing:0.8px; color:#AAA;">redctfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfgh</span>
        </p>
      </div>

    </div>

	</div>
</template>

<script>
export default {
  name: 'User',

  components: {}
}
</script>

<style scoped>

</style>