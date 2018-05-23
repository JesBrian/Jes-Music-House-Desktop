<template>
	<div style="width:100%; height:100%; padding:0 3%; box-sizing:border-box; background:#181818;">
    <div style="width:100%; height:53px; margin:0 auto 28px; padding:0 38px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:68px; text-shadow:1px 1px 0.5px #000;">
      <span style="font-size:23px; font-weight:700; color:#CCC;">编辑个人信息</span>
    </div>

    <!-- 基本信息 -->
    <div style="width:62%; display:inline-block;">

      <table style="width:88%; margin:0 auto; background:lightseagreen;">
        <tr>
          <td style="padding-bottom:18px; text-align:right;">昵称</td>
          <td>
            <input type="text" name="name" class="glass-bg box-show"/>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:right;">介绍</td>
          <td>
            <textarea class="glass-bg box-show"></textarea>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:right;">性别</td>
          <td></td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:right;">生日</td>
          <td></td>
        </tr>
        <tr>
          <td style="padding-bottom:18px; text-align:right;">地区</td>
          <td></td>
        </tr>
      </table>

      <!-- 保存按钮区域 -->
      <div style="margin-top:28px; text-align:center;">
        <div class="super-btn-out" style="width:108px; height:32px; margin:0 18px;">
          <span class="super-btn-in mh-if makesure" style="width:98px; height:22px; line-height:23px;"> 确认保存</span>
        </div>
        <div class="super-btn-out" style="width:108px; height:32px; margin:0 18px;">
          <span class="super-btn-in mh-if cancel" style="width:98px; height:22px; line-height:23px;"> 取消返回</span>
        </div>
      </div>
    </div>

    <!-- 修改头像 -->
    <div style="width:38%; float:right; text-align:center;">
      <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="glass-bg box-show" style="width:138px; height:138px; margin:0 auto; padding:8px; display:block;"/>
      <div class="super-btn-out" style="width:128px; height:32px; margin-top:12px;">
        <span class="super-btn-in mh-if datum" style="width:118px; height:22px; line-height:22px;">&nbsp;&nbsp;修改头像</span>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Setting',

  components: {}
}
</script>

<style scoped>

</style>