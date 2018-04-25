<template>
  <div class="glass-bg box-show" style="width:288px; top:54px; right:188px; position:fixed; border-radius:0 0 6px 6px; font-size:15px;">
    <div class="box-show" style="width:100%; height:48px; position:relative;">
      <slot />
      <p class="text-hidden" style="max-width:138px; margin-left:18px; display:inline-block; line-height:48px; letter-spacing:0.68px; font-size:16px;">JesBrianJesBrianJesBrianJesBrianJesBrian</p>
      <div class="super-btn-out" style="width:68px; height:25px; margin:10.5px 38px 0 0; float:right;">
        <span class="super-btn-in" style="width:60px; height:19px; top:52%; line-height:20px;">签到</span>
      </div>
    </div>
    <div class="box-shadow" style="width:99%; height:43px; margin:16px auto 0; padding-bottom:12px; text-align:center; font-weight:700;">
      <router-link to="/user" style="width:33%; height:100%; float:left;">
        <p style="font-size:20px; color:#DDD;">0</p>
        <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">动态</p>
      </router-link>
      <router-link to="/user" style="width:34%; height:100%; float:left; box-sizing:border-box; border-left:1px solid #282828; border-right:1px solid #282828;">
        <p style="font-size:20px; color:#DDD;">0</p>
        <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">关注</p>
      </router-link>
      <router-link to="/user" style="width:33%; height:100%; float:left;">
        <p style="font-size:20px; color:#DDD;">0</p>
        <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">粉丝</p>
      </router-link>
    </div>
    <ul class="box-shadow" style="width:99%; margin:0 auto;">
      <li>
        <router-link to="/user" class="user-oper-cell" style="display:block; line-height:2.3em; text-indent:2em;">
          <i class="mh-if singer" style="margin-right:8px;"></i>
          <span>个人主页</span>
          <i class="mh-if double-arrow-right" style="margin-right:23px; float:right; font-size:12px;"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/user" class="user-oper-cell" style="display:block; line-height:2.3em; text-indent:2em;">
          <i class="mh-if diamond" style="margin-right:8px;"></i>
          <span>VIP会员</span>
          <i class="mh-if double-arrow-right" style="margin-right:23px; float:right; font-size:12px;"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/user" class="user-oper-cell" style="display:block; line-height:2.3em; text-indent:2em;">
          <i class="mh-if level" style="margin-right:8px;"></i>
          <span>账号等级</span>
          <i class="mh-if double-arrow-right" style="margin-right:23px; float:right; font-size:12px;"></i>
        </router-link>
      </li>
    </ul>
    <ul class="box-shadow" style="width:99%; margin:0 auto;">
      <li>
        <router-link to="/setting" class="user-oper-cell" style="display:block; line-height:2.3em; text-indent:2em;">
          <i class="mh-if datum" style="margin-right:8px;"></i>
          <span>账号设置</span>
          <i class="mh-if double-arrow-right" style="margin-right:23px; float:right; font-size:12px;"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/config" class="user-oper-cell" style="display:block; line-height:2.3em; text-indent:2em;">
          <i class="mh-if gear" style="margin-right:8px;"></i>
          <span>修改配置</span>
          <i class="mh-if double-arrow-right" style="margin-right:23px; float:right; font-size:12px;"></i>
        </router-link>
      </li>
    </ul>
    <div class="box-shadow" style="width:99%; margin:0 auto 1px;">
      <router-link to="/" class="user-oper-cell" style="display:block; line-height:2.3em; text-indent:2em; border-radius:0 0 4px 4px;">
        <i class="mh-if exit" style="margin-right:8px;"></i>
        <span>安全退出</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserOperation'
}
</script>

<style scoped>
  .user-oper-cell {
    letter-spacing:1.3px;
  }
  .user-oper-cell:hover {
    background:#181818;
    color:#DDD;
  }
  .user-oper-cell > i.mh-if {
    color:#CCC;
  }
  .user-oper-cell:hover > i.mh-if {
    color: #00d8ff;
  }
  .user-oper-cell:hover > span {
    text-decoration:underline;
  }
</style>